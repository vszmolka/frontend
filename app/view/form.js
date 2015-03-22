Ext.define('TouchApp.view.form', {
    extend: 'Ext.form.Panel',
    xtype: 'form',
    
    config: {
        title: 'form',
        
        items: [
            {
                name: 'id',
                xtype: 'textfieldfield',
                label: 'Id'
            },
            {
                name: 'name',
                xtype: 'textfieldfield',
                label: 'Name'
            },
            {
                xtype: 'button',
                text: 'Submit',
                ui: 'confirm'
            }
        ]        
    }
});