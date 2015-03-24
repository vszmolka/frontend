Ext.define('TouchApp.model.Station', {
    extend: 'Ext.data.Model',
    config: {
        proxy: {
            type: 'direct',
//            idProperty: 'id',
            api: {
                read: 'Controller_Stations.getStations'

            }
        },

        fields: [
            { name: 'idStation', type: 'number' },
            { name: 'name', type: 'text' }

        ]
    }
});
