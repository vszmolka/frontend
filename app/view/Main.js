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
        'TouchApp.view.Carousel'
    ],
    config: {
        tabBarPosition: 'bottom',
        items: [{
                title: 'Home',
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
                        title: 'MyHome'
                    }, {
                        xtype: 'MyCarousel'
                    }]
            }, {
                title: 'Settings',
                iconCls: 'settings',
                items: [{
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Settings'
                    }]
            }]
    }
});
