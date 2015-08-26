Template.post_submit.rendered = function () {
  if (Session.get("categoryId")) {
      $("input[value="+Session.get("categoryId")+"]").attr("checked", true);
  };
}; 
Template.post_submit.destroyed = function () {
  Session.set("categoryId", null);
  console.log("destroyed")
};