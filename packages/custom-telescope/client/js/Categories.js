
Template.biologCategories.helpers({
    rootURL: function(){
        return Meteor.blogURL;
    },
    categories: function () {
       return Categories.find({"parentId":null},{sort:{name:1}}).map(function (category, index) {
       // console.log(category, index);
         category.post = Posts.find( { categories: { $in: [ category._id ] } } ).count();
         
         //category.subCategories = Categories.find({"parentId":category._id},{fields:{name:1}}).fetch();
         category.subCategories = Categories.find({"parentId":category._id}).fetch();
        
         
         return category;
       });
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
Template.biologCategories.events({
  'click': function (e, tpl) {
    // ...
    
    Router.go('/category/'+this.slug);
  },
  'click a.expand': function (e, tpl) {
    e.preventDefault();
   
    Session.set("categoryId", this._id);
    Router.go('/submit');
  }
});
Template.biologCategories.rendered = function () {
    if (Modernizr.touch) {
        // show the close overlay button
        $(".close-overlay").removeClass("hidden");
        $(document).on('click','.image', function(e){
            if (!$(this).hasClass("hover")) {
                $(this).addClass("hover");
            }
        })
        $(document).on('click', '.close-overlay',function(e){
            e.preventDefault();
            e.stopPropagation();
            if ($(this).closest(".image").hasClass("hover")) {
                $(this).closest(".image").removeClass("hover");
            }
        } )
    } else {
        $(document).on('mouseenter', '.image',function(){
            $(this).addClass("hover");
           
        })
         $(document).on('mouseleave', '.image',function(){
            $(this).removeClass("hover");
            
        })
    }
};

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
Meteor.startup(function(){
  Template.hero.rendered = function () {
  var self = this;


  if(Meteor.user()){
    console.log("tect changed")
   var button = self.find("a.button");
   button.text =  "Add a Post";


  }
  else{
    var button = self.find("a.button");
   button.text =  "Join Us";
   button.href = "/sign-in"
  }

  
};
})

