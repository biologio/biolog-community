Template.menuComponent.helpers({
    getTemplateName: function() {
        return this.template.name;
    }
});


Template.post_item.events({
    'click .post': function(e, tpl) {
        e.preventDefault();
        if (e.target.nodeName == 'DIV') {
            console.log(this);

            link = tpl.find('a.post-title');
            var text = link.text.replace(/ /g, '-').toLowerCase();
            $(link).attr('href', null);
            $(link).attr('target', '');
            location.assign('/posts/' + this.wrapperId);
            // Router.go('/posts/'+ this.wrapperId);  
        } else if (e.target.nodeName == 'A' && e.target.className.indexOf("post-title") != -1) {
            if (e.target.href.indexOf("out?url") != -1) {
                link = tpl.find('a.post-title').href.split("=")[1];
                // link = link.substring(link.indexOf('.')+1)
                link = decodeURIComponent(link);

                location.assign(link);
            } else {
                postTitle = tpl.find('a.post-title').text.replace(/ /g, '-').toLowerCase();
                location.assign('/posts/' + this.wrapperId);

            }
        } else {
            //postTitle = tpl.find('a.post-title').text.replace(/ /g, '-');
            if (e.target.nodeName != 'A') {
                var link = $(e.target).parents('a').attr('href');
                Router.go(link);

            }
            else{
               location.assign(e.target.href);
            }
           
        }

    }
})

Template.post_title.helpers({
    summary: function () {
       return Telescope.utils.trimWords("this is a test please ignore this i am going to test this functionality", 10)
    }
});

Template.post_title.events({
    'click a.post-title': function (e, tpl) {
           console.log(e);
        // Routes to include the hero on
        var homeRoutes = [
            'posts_default',
            'posts_top',
            'posts_best',
            'posts_new',
            'posts_digest',
            'posts_daily'
        ];

        // Current route
        var route = Router.current().route.getName();
            // Check if we should display the hero on this route
            for (i in homeRoutes) {
                if (homeRoutes[i] === route) {
                    Router.go("/posts/"+this._id+"/"+this.slug)
                    return false
                    
                }
            }
        

       
    }
   
});