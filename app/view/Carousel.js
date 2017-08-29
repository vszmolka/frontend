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
            {xtype: 'DepartureList', title: 'Departures today, after ', emptyText:'<p>There are no ferries on this day.</p>', dow: 0},
            {xtype: 'DepartureList', title: 'Departures on Monday', emptyText:'<p>There are no ferries on this day.</p>', dow: 1},
            {xtype: 'DepartureList', title: 'Departures on Tuesday', emptyText:'<p>There are no ferries on this day.</p>', dow: 2},
            {xtype: 'DepartureList', title: 'Departures on Wednesday', emptyText:'<p>There are no ferries on this day.</p>', dow: 3},
            {xtype: 'DepartureList', title: 'Departures on Thursday', emptyText:'<p>There are no ferries on this day.</p>', dow: 4},
            {xtype: 'DepartureList', title: 'Departures on Friday', emptyText:'<p>There are no ferries on this day.</p>', dow: 5},
            {xtype: 'DepartureList', title: 'Departures on Saturday', emptyText:'<p>There are no ferries on this day.</p>', dow: 6},
            {xtype: 'DepartureList', title: 'Departures on Sunday', emptyText:'<p>There are no ferries on this day.</p>', dow: 7}

        ],
        itemId: 'departurecarousel'
    },

    listeners: {
        activate: function () {
            var me = this;


        }
    }

});

