Ext.define('TouchApp.store.Departures', {
    extend: 'Ext.data.Store',
    requires: ['TouchApp.model.Departure'],
    config: {
        model: 'TouchApp.model.Departure'
    }
});
