/**
 * Posts schema
 * @type {SimpleSchema}
 */
Posts.schema = new SimpleSchema({

  body: {
    type: String,
    optional: true,
    max: 10000,
    editableBy: ["member", "admin"],
    autoform: {
      rows: 10
    }
  }

 
 

});


/**
 * Attach schema to Posts collection
 */
Posts.attachSchema(Posts.schema);


