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
                $(link).attr('href', null);
                $(link).attr('target', '');
                location.assign('/posts/' + this.wrapperId);
            } else {
                return true
            }
        }

    }
})

