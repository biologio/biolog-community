
Session.set("showSLogan", true);
Template.hero.helpers({
	showImage: function () {
		return Session.get("showSLogan")
	}
});