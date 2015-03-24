Ext.define('TouchApp.store.Stations', {
    extend: 'Ext.data.Store',
    requires: ['TouchApp.model.Station'],
    config: {
        storeId: 'Providers',
        model: 'TouchApp.model.Station'
    }
});
