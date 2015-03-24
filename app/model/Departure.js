Ext.define('TouchApp.model.Departure', {
    extend: 'Ext.data.Model',
    config: {
        proxy: {
            type: 'direct',
//            idProperty: 'id',
            api: {
                read: 'Controller_StationDepartures.getDepartures'

            }
        },

        fields: [
            { name: 'idStationDepartures', type: 'number' },
            { name: 'time', type: 'text' },
            { name: 'dow', type: 'number' },
            { name: 'Providers_idProvider', type: 'number' },
            { name: 'Stations_idStationDeparture', type: 'number' },
            { name: 'Stations_idStationArrive', type: 'number' }

        ]
    }
});
