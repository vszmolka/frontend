/**
 * Created by steveetm on 2015.03.24..
 */
Ext.define('TouchApp.controller.MainController', {
    extend: 'Ext.app.Controller',

    config: {

        control: {
            'carousel[itemId="departurecarousel"]': {
                'activate': 'onCarouselActiveItemChangeactive',
                'activeitemchange': 'onCarouselActiveItemChange',
                'painted': 'onCarouselActiveItemChange',
                'afterrender': 'onCarouselActiveItemChange'

            }
        }
    },

    onCarouselActiveItemChange: function(carousel, value, oldValue, eOpts) {
        var postfix='';
        if (carousel.getActiveIndex() == 0) {
            var date = new Date()
            postfix= ' after '+('0'+date.getHours()).slice(-2)+':'+('0'+date.getMinutes()).slice(-2)+':'+('0'+date.getSeconds()).slice(-2)
        }
        carousel.up('tabpanel').down('titlebar').setTitle(value.title+postfix);
    },
    onCarouselActiveItemChangeactive: function(scope, value, oldValue, eOpts) {
        console.log('activated carousel');
    },
    initialize: function( ) {
        console.log('ok');
        this.callParent(arguments);
    },
    constructor: function() {
        console.log('constructor ok');
        this.callParent(arguments);
    }
})