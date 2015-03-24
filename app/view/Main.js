/**
 * An example class showcasing the features of JSDuck.
 *
 * **Markdown** is supported thoughout the [docs][1].
 *
 * Link to {@link Ext.form.field.Text external class} and
 * {@link Ext.form.field.Text#reset its method}.
 * Link to {@link #setSize method of this class}.
 *
 * {@img some/path.png Alt text}
 *
 * An embedded live example:
 *
 *     @example
 *     Ext.create('Ext.master.Switch', {
 *         text: 'Click me, please!',
 *         handler: function() {
 *             alert('You clicked me!')
 *         }
 *     });
 *
 * **Note:** this is not a fully working example. When you run it
 * through JSDuck you will get warnings about a lot of missing classes
 * that this example class references, additionally it doesn't make
 * sense for singleton class to have static methods.
 *
 * [1]: http://docs.sencha.com/ext-js/4.0/
 */

Ext.define('TouchApp.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
        'Ext.carousel.Carousel',
        'TouchApp.view.Carousel',
        'TouchApp.view.MyGrid',
        'TouchApp.view.DepartureList',
        'TouchApp.view.Settings'
    ],
    config: {
        tabBarPosition: 'bottom',
        items: [{
            title: 'Departures',
            iconCls: 'home',
            cls: 'cards',
            defaults: {
                flex: 1
            },
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [{
                docked: 'top',
                xtype: 'titlebar',
                title: 'Deparutes'
            },{
                xtype: 'MyCarousel',
                itemId: 'departurecarousel'
            }]
        }, {
            title: 'Settings',
            iconCls: 'settings',
            cls: 'cards',
            defaults: {
                flex: 1
            },
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [{
                docked: 'top',
                xtype: 'titlebar',
                title: 'Settings'
            }, {
                xtype: 'Settings'
            }]
        }]
    }
});
