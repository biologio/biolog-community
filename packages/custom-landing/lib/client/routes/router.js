Object.defineProperty(Meteor, 'blogURL', {
    enumerable: false,
    configurable: false,
    writable: false,
    value: '/community'
});


Meteor.startup(function() {

    var arrDeleteRoute = [];
    arrDeleteRoute.push('posts_default');
    arrDeleteRoute.push('posts_top');
    arrDeleteRoute.push('posts_new');
    arrDeleteRoute.push('posts_best');
    arrDeleteRoute.push('posts_pending');
    arrDeleteRoute.push('posts_scheduled');
    arrDeleteRoute.push('posts_day');
    arrDeleteRoute.push('posts_category');
    arrDeleteRoute.push('search');
     arrDeleteRoute.push('page');
    // arrDeleteRoute.push('pages');


    var isRemoved = Meteor.removeRouteByName(arrDeleteRoute);
    //  Meteor.removeRouteByName('posts_top');
    // Meteor.removeRouteByName('posts_new');
    console.log(isRemoved);
    // Meteor.removeRouteByName('posts_best');
    // Meteor.removeRouteByName('posts_pending');
    // Meteor.removeRouteByName('posts_scheduled');
    // Meteor.removeRouteByName('posts_day');
    // Meteor.removeRouteByName('posts_daily');
    // Meteor.removeRouteByName('pages');

    console.log(isRemoved[0])

    var landingTemplate = new Template('landing', function() {
        return Template.landing;

    });
    Router.route('/', {
        layoutTemplate: 'landingLayout',
        name: 'posts_default',
        template: landingTemplate,
        data: {

        }

    });
    Router.route(Meteor.blogURL, {
        name: 'community',
        controller: Posts.controllers.default
    });
    Router.route(Meteor.blogURL + '/new/:limit?', {
        name: 'posts_new',
        controller: Posts.controllers.new
    });
    Router.route(Meteor.blogURL + '/top/:limit?', {
        name: 'posts_top',
        controller: Posts.controllers.top
    });
    Router.route(Meteor.blogURL + '/best/:limit?', {
        name: 'posts_best',
        controller: Posts.controllers.best
    });

    Router.route(Meteor.blogURL + '/pending/:limit?', {
        name: 'posts_pending',
        controller: Posts.controllers.pending
    });
    Router.route(Meteor.blogURL + '/scheduled/:limit?', {
        name: 'posts_scheduled',
        controller: Posts.controllers.scheduled
    });
    Router.route(Meteor.blogURL + '/day/:limit?', {
        name: 'posts_day',
        controller: Posts.controllers.day
    });
    Router.route(Meteor.blogURL + '/category/:slug/:limit?', {
        name: 'posts_category',
        controller: Posts.controllers.category,
    });
    Router.route(Meteor.blogURL + '/daily/:limit?', {
        name: 'posts_daily',
        controller: Posts.controllers.daily
    });
    // Router.route(Meteor.blogURL + '/pages', {
    //     name: 'pages',
    //     controller: Telescope.controllers.admin
    // });
    Router.route(Meteor.blogURL + '/search/:limit?', {
        name: 'search',
        controller: Posts.controllers.search
    });
    Router.route(Meteor.blogURL + '/page/:slug', {
        name: 'page',
        
    });

    // Router.route(Meteor.blogURL + '/search/:limit?', {
    //     name: 'search',
    //     controller: Posts.controllers.search
    // });




});
