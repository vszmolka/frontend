/**
 * This is our main view, where a tabpanel holds all of the components.
 *
 */

Ext.define('TouchApp.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
        'Ext.carousel.Carousel',
        'TouchApp.view.Carousel',
        'TouchApp.view.DepartureList',
        'TouchApp.view.Settings',
        'TouchApp.store.Stations'
    ],
    test: function () {
        alert('a');
    },
    downloadData: function () {
        TouchApp.app.getApplication().preCacheStores(function () {
            Ext.Msg.alert('Refreshed every store');
        }, function () {
            Ext.Msg.alert('Failed to download new data', 'Please check your network connection');
        });
    },
    selectProvider: function () {
        var settingsPage = this.down('#SettingsPage');
        if (Ext.ComponentQuery.query('#SettingsPage')[0].isHidden()) {
            Ext.ComponentQuery.query('#SettingsPage')[0].show();
        }
        else {
            Ext.ComponentQuery.query('#SettingsPage')[0].hide();
        }
    },
    config: {
        listeners: {
            /**
             * We have to "disable" the last tab, as it only servers as a download button. So, if the clicked tab is the last, prevent the setActiveItem to finish.
             * @event
             */
            activeitemchange: {
                order: 'before',
                fn: function (tabpanel, curIdx, oldIdx) {
                    console.log('tabpanelchange');
                    if (curIdx.config.itemId == 'downloadData') {
                        this.downloadData();
                    }
                    if (curIdx.config.itemId === 'settingsBtn') {
                        this.selectProvider();
                    }

                    if (curIdx.config.preventTabChange) {
                        return false;
                    }
                }

            }
        },

        tabBarPosition: 'bottom',
        items: [{
            title: 'Departures',
            iconCls: 'home',
            cls: 'cards',
            defaults: {
                flex: 1
            },
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [{
                docked: 'top',
                iconCls: 'anchor',
                labelCls: 'sajatclass',
                xtype: 'selectfield',
                fieldLabel: 'Departure',
                itemId: 'stationSelect',
                store: Ext.create('TouchApp.store.Stations'),
                displayField: 'name',
                valueField: 'idStation',
                // height: 100,
                labelWidth: '45%'
            },
                {
                    docked: 'top',
                    iconCls: 'anchor',
                    labelCls: 'sajatclass',
                    xtype: 'selectfield',
                    fieldLabel: 'Destination',
                    itemId: 'stationSelect',
                    store: Ext.create('TouchApp.store.Stations'),
                    displayField: 'name',
                    valueField: 'idStation',
                    // height: 100,
                    labelWidth: '45%'
                }, {
                    docked: 'top',
                    xtype: 'container',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'titlebar',
                            flex: '2',
                            //This is not the best place for this nor the best method. The controller should have a common title generator function.
                            title: function () {
                                var postfix = '';

                                var date = new Date()
                                // postfix = ' after ' + ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2) + ':' + ('0' + date.getSeconds()).slice(-2)

                                // return 'Departures today, after ' + postfix
                                return 'Today ' + new Date().toLocaleDateString("en-EN");
                            }()
                        }, {
                            xtype: 'button',
                            title: 'Next',
                            iconCls: 'arrow_right'
                        }
                    ]

                },
                {
                    xtype: 'MyCarousel',
                    itemId: 'departurecarousel',
                    flex: 1
                },
                {
                    xtype: 'Settings',
                    itemId: 'SettingsPage',
                    hidden: true,
                    flex: 1
                }]
        }, {
            title: 'Providers',
            iconCls: 'settings',
            itemId: 'settingsBtn',
            preventTabChange: true,
            cls: 'cards',
            defaults: {
                flex: 1
            },
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [{
                docked: 'top',
                xtype: 'titlebar',
                title: 'Settings'
            }]
        }, {
            title: 'Download data',
            itemId: 'downloadData',
            preventTabChange: true,
            iconCls: 'refresh',
            defaults: {
                flex: 1
            },
            layout: {
                type: 'vbox',
                align: 'stretch'
            }

        }]
    }
});
