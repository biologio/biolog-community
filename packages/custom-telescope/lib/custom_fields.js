Meteor.startup(function() {
    // Custom Post Field
    Posts.addField({
        fieldName: 'image',
        fieldSchema: {
            type: String,
            optional: true,
            editableBy: ["member", "admin"]
        }
    });
    
 Categories.addField({
        fieldName: 'categoryIcon',
        fieldSchema: {
            type: String,
            optional: true,
            editableBy: ["member", "admin"]

        }
    });




})