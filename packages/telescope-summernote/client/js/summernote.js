// Template.post_submit.rendered = function() {
//     console.log("rendered");
//     var template = this;
//     Meteor.setTimeout(function(){
//         $("textarea[name='body']").summernote({
//         height: 300,

//         onImageUpload: function(files, editor, $editable) {
//          console.log(files, editor, $editable);
//           CFS_Images.insert(files[0], function (err, fileObj) {
//         template.autorun(function (c) {
//           fileObj = CFS_Images.findOne(fileObj._id);
//           var url = fileObj.url();
//           if (url) {
//             editor.insertImage($editable, url);
//             c.stop();
//           }
//         });
//       });
//       }
//    });
//     }, 200)

// };
Meteor.subscribe("CFS_Images");
// Template.post_submit.rendered = function() {
//   var template = this;
//   var $summernote = $("textarea[name='body']")
//  $summernote.summernote({
//     height: 400,
//     maxHeight: 800,
//     minHeight: 250,
//     onImageUpload: function(files, editor, $editable) {

//       CFS_Images.insert(files[0], function(err, fileObj) {
//         console.log("after insert:", fileObj._id);
//         template.autorun(function(c) {
//           fileObj = CFS_Images.findOne(fileObj._id);
//           var url = fileObj.url();
//           var imageURL = imageURL = "uploads1/images-"+fileObj._id+"-"+fileObj.name();
//        $dom = $("<img>").attr('src',imageURL);
//           if (url) {
//             $summernote.summernote("insertNode", fileObj.url(), "Image Title");
//             //editor.insertImage($editable, url);
//             c.stop();
//           }
//         }, {
//           tx: true
//         });
//       });

//     }
//   });
// }
Template.post_submit.rendered = function() {
        var template = this;
          Meteor.setTimeout(function() {
        var $summernote = $("textarea[name='body']");
        $summernote.summernote({
            height: 400,
            maxHeight: 1800,
            minHeight: 250

        });
    }, 500)
        
    }
    // FS.Utility.eachFile(event, function(file) {
    //     Images.insert(file, function (err, fileObj) {
    //       // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
    //     });
    //   });
Template.post_edit.rendered = function() {
 


    Meteor.setTimeout(function() {
        var $summernote = $("textarea[name='body']");
        $summernote.summernote({
            height: 400,
            maxHeight: 1800,
            minHeight: 250

        });
    }, 500)


};

Template.registerHelper("HTMLPurify", function(html){
  if(html){
    return UniHTML.purify(html)
  }
  return null;
  
})

Telescope.callbacks.add("postSubmitClient", function(postObject){
  postObject.body = UniHTML.purify(postObject.body);
  console.log(postObject.body)
  return postObject;
})
Telescope.callbacks.add("postEditClient", function(postObject){
  postObject.$set.body = UniHTML.purify(postObject.$set.body);
  console.log(postObject.$set.body)
  return postObject;
})

