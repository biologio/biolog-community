Template.menuComponent.helpers({
    getTemplateName: function() {
        return this.template.name;
    }
});
Template.post_item.events({
    'click .post-title': function(e, tpl) {
        if (FlowRouter.current().route.name == "postsDefault") {
            link = tpl.find('a.post-title');
            e.preventDefault();
            var text = Telescope.utils.slugify(link.text);
            $(link).attr('href', null);
            $(link).attr('target', '');
            location.assign('/posts/' + this._id);
        } else {
            return true
        }
    },
    'click .post': function(e, tpl) {
        if (FlowRouter.current().route.name == "postsDefault") {
            console.log(this);
            if (e.target.nodeName == 'DIV') {
                e.preventDefault();

                link = tpl.find('a.post-title');
                var text = Telescope.utils.slugify(link.text);
                //$(link).attr('href', null);
               // $(link).attr('target', '');
                if(this.moduleData && this.moduleData._id) location.assign('/posts/' + this.moduleData._id);
            } else {
                return true
            }
        }

    }
})

Template.categories.helpers({
  
    showPostCount: function(post) {
        if (post <= 1) {
            return '<div class="value"> ' + post + '  </div>  <div class="label">Post</div>'
        } else {
            return '<div class="value"> ' + post + '  </div>  <div class="label">Posts</div>'
        }
    }
});
Template.jumbotron.rendered = function() {

 Meteor.setTimeout(function(){
   $('.sidebar-toggle').on('click', function() {
        $('.sidebar-jumbotron-settings')
            .sidebar('setting', 'transition', 'scale down').sidebar('toggle');
        
console.log("jumbotron")
    })

 }, 2000)
};


