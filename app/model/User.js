Ext.define('TouchApp.model.User', {
    extend: 'Ext.data.Model',
    config: {
        proxy: {
            type: 'direct',
            idProperty: 'id',
            api: {
                read: 'Controller_Users.getUsers',
                update: 'Controller_Users.updateUser',
                destroy: 'Controller_Users.deleteUser'
            }
        },

        fields: [
            { name: 'id', type: 'number' },
            { name: 'name', type: 'text' },
            { name: 'age', type: 'number' },
            { name: 'card', type: 'text' }

        ]
    }
});
