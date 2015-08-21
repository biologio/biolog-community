Template.biologCategories.helpers({
    rootURL: function(){
        return Meteor.blogURL;
    },
    categories: function () {
       return Categories.find({"parentId":null}).map(function (category) {
         category.post = Posts.find( { categories: { $in: [ category._id ] } } ).count();
         console.log(category);
         //category.subCategories = Categories.find({"parentId":category._id},{fields:{name:1}}).fetch();
         category.subCategories = Categories.find({"parentId":category._id}).fetch();
          console.log(category);
         return category;
       });
    },
    pages:function(){
        return Pages.find();
    },
      showCategories: function () {
    // Routes to include the hero on
    var heroRoutes = [
      'posts_default',
      'posts_top',
      'posts_best',
      'posts_new',
      'posts_digest',
      'posts_daily'
    ];

    // Current route
    var route = Router.current().route.getName();

    if (getHeroSetting('heroOn')) {
      // Check if we should display the hero on this route
      for (i in heroRoutes) {
        if (heroRoutes[i] === route) {
          Session.set('showCategory', true);
          return true;
        }
      }
    }
    Session.set('showCategory', false);
    return false;
  }
});

getHeroSetting = function(setting, defaultValue){
  var heroSettings = HeroSettings.find().fetch()[0];

  if(heroSettings && (typeof heroSettings[setting] !== 'undefined')) { // look in HeroSettings collection
    return heroSettings[setting];

  } else if (typeof defaultValue !== 'undefined') { // fallback to default
    return  defaultValue;

  } else { // or return undefined
    return undefined;
  }

};

Meteor.find