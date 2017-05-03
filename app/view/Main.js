/**
 * This is our main view, where a tabpanel holds all of the components.
 *
 */

Ext.define('TouchApp.view.Main', {
    extend: 'Ext.Panel',
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
    config: {
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        listeners: {
            /**
             * We have to "disable" the last tab, as it only servers as a download button. So, if the clicked tab is the last, prevent the setActiveItem to finish.
             * @event
             */
            activeitemchange: {
                order: 'before',
                fn: function (tabpanel, curIdx, oldIdx) {
                    console.log('tabpanelchange');
                    if (curIdx.config.itemId=='downloadData') {
                        TouchApp.app.getApplication().preCacheStores(function() {
                            Ext.Msg.alert('Refreshed every store');
                        },function() {
                            Ext.Msg.alert('Failed to download new data', 'Please check your network connection');
                        });
                        return false;
                    }
                }

            }
        },

        items: [
        // Titlebar component
        {
            docked: 'top',
            xtype: 'titlebar',
            title: 'Connectisle',
            cls: 'ci-titlebar'
        },

        // Filter components
        {
            docker: 'top',
            xtype: 'panel',
            cls: 'ci-app-title',
            html: 'When is the next boat?'
        }, {
            //docked: 'top',
            xtype: 'selectfield',
            fieldLabel: 'Departure',
            itemId: 'stationSelect',
            store: Ext.create('TouchApp.store.Stations'),
            displayField: 'name',
            valueField: 'idStation',
            height: 25
        }, {
            //docked: 'top',
            xtype: 'selectfield',
            fieldLabel: 'Provider',
            itemId: 'providerSelect',
            store: Ext.create('TouchApp.store.Providers'),
            displayField: 'name',
            valueField: 'idProvider',
            height: 25,
            listeners: {
                initialize: function () {
                    var me = this;
                    //Load the store with the cached data.
                    var Providers= Ext.JSON.decode(localStorage.getItem('ProvidersCache'));
                    me.getStore().loadData(Providers);
                }
            },
            store: Ext.create('TouchApp.store.Providers'),
            config: {
                itemId: 'Providers',
                itemTpl: '{name}'
            },
            itemTpl: '{name}'
        }, {
            xtype: 'panel',
            itemId: 'ci-list-title',
            cls: 'ci-list-title',
            html: function() {
                var postfix = '';
                var date = new Date();
                
                postfix = ' after ' + ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2).slice(-2)

                return 'Sailings today, ' + postfix}()
        }, {
            xtype: 'MyCarousel',
            flex: 1,
            itemId: 'departurecarousel'
        }, {
            xtype: 'button',
            cls: 'ci-refresh-btn',
            itemId: 'refreshbutton',
            html: 'Refresh data'
        }]
    }
});
