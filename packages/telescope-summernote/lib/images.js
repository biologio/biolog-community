CFS_Images.allow({
  'insert': function () {
    // add custom authentication code here
    return true;
  },
   'update': function () {
    // add custom authentication code here
    return true;
  }
});
Meteor.publish("CFS_Images", function(){
	return CFS_Images.find();
})