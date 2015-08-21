


Template.menuComponent.helpers({

    getTemplateName: function() {
        return this.template.name;
    }
});

// Template.logo.helpers({
    
//   logoUrl: function(){
//     var url = "http://www.svgmaker.com/images/ie_40h.png";
//     console.log(url);
//     return url;
//   }
// });

Template.post_item.events({
    'click .post': function (e, tpl) {
        console.log(this);
        route = tpl.find('a.post-title').href;
        Router.go(route);
    }
})