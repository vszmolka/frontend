Ext.define('TouchApp.store.Providers', {
    extend: 'Ext.data.Store',
    requires: ['TouchApp.model.Provider'],
    config: {
        storeId: 'Providers',
        model: 'TouchApp.model.Provider',


    }
});
