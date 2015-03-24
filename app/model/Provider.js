Ext.define('TouchApp.model.Provider', {
    extend: 'Ext.data.Model',
    config: {
        proxy: {
            type: 'direct',
//            idProperty: 'id',
            api: {
                read: 'Controller_Providers.getProviders'

            }
        },

        fields: [
            { name: 'idProvider', type: 'number' },
            { name: 'name', type: 'text' }

        ]
    }
});
