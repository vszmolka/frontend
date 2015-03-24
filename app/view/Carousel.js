/**
 * This is our carousel component, which have 8 departure lists.
 *
 */
Ext.define('TouchApp.view.Carousel', {
    extend: 'Ext.Carousel',
    xtype: 'MyCarousel',
    ui: 'custom',



    config: {
        items: [
            {xtype: 'DepartureList', title: 'Departures today, after ', dow: 0},
            {xtype: 'DepartureList', title: 'Departures on Monday', dow: 1},
            {xtype: 'DepartureList', title: 'Departures on Tuesday', dow: 2},
            {xtype: 'DepartureList', title: 'Departures on Wednesday', dow: 3},
            {xtype: 'DepartureList', title: 'Departures on Thursday', dow: 4},
            {xtype: 'DepartureList', title: 'Departures on Friday', dow: 5},
            {xtype: 'DepartureList', title: 'Departures on Saturday', dow: 6},
            {xtype: 'DepartureList', title: 'Departures on Sunday', dow: 7}

        ],
        itemId: 'departurecarousel'
    },

    listeners: {
        activate: function () {
            var me = this;


        }
    }

});

