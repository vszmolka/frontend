Ext.define('TouchApp.view.MyGrid', {
    extend: 'Ext.grid.Grid',
    xtype: 'MyGrid',
    config: {
        requires: ['TouchApp.store.Users'],
        title: 'Sample Grid',
        plugins: [ {
            type: 'grideditable'
        }],
        columns: [
            {
                text: 'id',
                dataIndex: 'id',
                width: 80
            },
            {
                text: 'name',
                dataIndex: 'name',
                width: 200,
                editable: true

            },
            {
                text: 'age',

                dataIndex: 'age',
                width: 80
            },
            {
                text: 'card',
                dataIndex: 'card',
                width: 500
            }

        ],

        store: Ext.create('TouchApp.store.Users', {})

    }  ,initialize: function() {
        var me = this;
        me.getStore().load();
        me.callParent(arguments);
    }
});