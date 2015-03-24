/**
 * This is our very own Carousel class, which loads some dynamic items from our backend and saving those items
 * to the localStorage. If the connection is down, then the {@link #onData} method loads the latest saved data into our
 * Carousel. From this point, every ten seconds the {@link #onData} method will reload itself. If a up-to-date data retrieved
 * then the cache will be refresh and the new data will be added to the Carousel
 *
 *
 */
Ext.define('TouchApp.view.Carousel', {
    extend: 'Ext.Carousel',
    xtype: 'MyCarousel',
    ui: 'custom',

        /**
     * This class do the hard work of managing the content of the carousel.
     *
     * @param {type} [result] The result array from our backend.
     * @param {type} response The response object from Ext.Direct Provider.
     * @param {type} success
     * @returns {undefined}
     */
    onData: function (result, response, success) {
        var me = this;
        var cacheKey = 'cached-carousel-items';

        if (success) {
            localStorage.removeItem(cacheKey);
            localStorage.setItem(cacheKey, Ext.JSON.encode(result));
            me.removeAll(true);
            me.add(result);
        } else {
            var cachedItems = Ext.JSON.decode(localStorage.getItem(cacheKey));
            if (cachedItems && typeof cachedItems == 'object') {
                me.removeAll(true);
                me.add(cachedItems);
                setTimeout(function () {
                    Controller_Welcome.onlyremote(Ext.bind(me.onData, me));
                }, 10000);

            } else {
                if (!me.showAlert) {
                    Ext.Msg.alert('Warning', 'Cannot find any cached data <br /> for carousel.<br /> Retry to reload in every 3 seconds', Ext.emptyFn);
                    me.showAlert = false;
                }
                setTimeout(function () {
                    Controller_Welcome.onlyremote(Ext.bind(me.onData, me));
                }, 3000);
            }
        }

    },

    config : {
        items: [{xtype: 'DepartureList', title: 'Departures today'},{xtype:'DepartureList',title:'Departures on Monday'},{xtype:'DepartureList',title:'Departures on Tuesday'},{xtype:'DepartureList',title:'Departures on Wednesday'}]
    },
    initialize: function () {
        var me = this;
        me.callParent(arguments);
        me.setActiveItem(0);
     //   Controller_Welcome.onlyremote(Ext.bind(me.onData, me));

    }
    /* 
     * To change this license header, choose License Headers in Project Properties.
     * To change this template file, choose Tools | Templates
     * and open the template in the editor.
     */
});

