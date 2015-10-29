/**
 * Posts schema
 * @type {SimpleSchema}
 */
 console.log(Meteor.settings.public.HTMLBodySize);
Posts.schema = new SimpleSchema({

  body: {
    type: String,
    optional: true,
  
    max:Meteor.settings.public.HTMLBodySize,
    
    editableBy: ["member", "admin"],
    autoform: {
      rows: 10
    }
  }


 
 

});


/**
 * Attach schema to Posts collection
 */
//var rootPath = process.env.PWD;
Posts.attachSchema(Posts.schema);

var eventPhotosStore = new FS.Store.FileSystem('images', {
  path: '~/codebase/biolog-community/public/uploads'
});


CFS_Images = new FS.Collection("images", {
  stores: [eventPhotosStore]
  
});
//console.log(Meteor.rootPath)


