Ext.define('TouchApp.view.Settings', {
    extend: 'Ext.form.Panel',
    xtype: 'Settings',
    requires: ['TouchApp.store.Providers'],
    config: {
        title: 'Global preferences',
        layout: {
            type: 'vbox'

        },
        items: [
            {
                xtype: 'label',
                html: 'Show only these:'
            },
            {
                name: 'name',
                xtype: 'list',
                fieldLabel: 'Show only these providers',
                flex: 1,
                scrollable: false,
                mode: 'MULTI',
                listeners: {
                    selectionchange: function (list, records) {
                        var names = [];
                        Ext.Array.each(records, function (item) {
                            names.push('<li>' + item.data.name + '</li>');
                        }); // each()
                        Ext.Msg.alert('You selected ' + records.length + ' item(s)', '<ul>' + names.join('') + '</ul>');
                    }
                },
                store: Ext.create('TouchApp.store.Providers'),
                config: {

                    itemId: 'Providers',
                    itemTpl: '{name}'

                },

                itemTpl: '{name}',
                initialize: function () {
                    var me = this;
                    me.getStore().load();
                    debugger;
                }
            },
            {
                xtype: 'button',
                text: 'Submit',
                ui: 'confirm'
            }
        ]
    }
});