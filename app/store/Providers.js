Ext.define('TouchApp.store.Providers', {
    extend: 'Ext.data.Store',
    requires: ['TouchApp.model.Provider'],
    config: {
        model: 'TouchApp.model.Provider'
    }
});
