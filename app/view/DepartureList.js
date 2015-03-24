Ext.define('TouchApp.view.DepartureList',{
    extend: 'Ext.dataview.DataView',
    requires: ['Ext.dataview.DataView'],
    xtype :'DepartureList',
    initialize: function() {
        var me = this;
        me.callParent(arguments);

        var Providers = Ext.JSON.decode(localStorage.getItem('ProvidersCache'));
        var Departures = Ext.JSON.decode(localStorage.getItem('StationDeparturesCache'));

        Departures.forEach(function(departure) {
            departure.providerName = Provider.filter(function(o,k) {if (o.idProvider==1) {return o}})[0].name
        });
        me.getStore().setData();
       // me.getStore().load();
    },
    filterByAfterTime: function(time) {
        var me = this;
        me.getStore().clearFilters();

    },
    config : {
        store: Ext.create('TouchApp.store.Departures'),
        itemTpl: '<div class="{class}">Departure at {time}  from station id </div>'
    }
})
/**
 * Created by steveetm on 2015.03.24..
 */
