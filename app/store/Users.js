Ext.define('TouchApp.store.Users', {
    extend: 'Ext.data.Store',
    requires: ['TouchApp.model.User'],
    config: {
        model: 'TouchApp.model.User'
    }
});
