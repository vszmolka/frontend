Ext.define('TouchApp.model.Departure', {
    extend: 'Ext.data.Model',
    getTime: function() {
        return '10:00';
    },
    config: {
        proxy: {
            type: 'direct',
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
            { name: 'Stations_idStationArrive', type: 'number' },
            { name: 'providerName', type: 'string'},
            { name: 'stationName', type: 'string'},
            { name: 'stationNameTo', type: 'string'}
        ]
    }
});
