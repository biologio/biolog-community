Package.describe({
    name: "biolog:poll",
    summary: "polling module for your app",
    version: "0.1.0"

});

Package.onUse(function(api) {
api.use('mongo',  'server');

    api.use([
        'templating',
        'iron:router',
        'minimongo'
        

    ], 'client');


    // i18n config (must come first)

api.addFiles([
      'lib/collections/poll-collection.js'
    ], ['client', 'server']);

 api.add_files("lib/bootstrap.js", ["server"]);
 api.add_files("server/publish.js", ["server"]);

    api.add_files("client/templates/poll.html", ["client"]);
    api.add_files("lib/routes/route.js", ["client"]);
    api.add_files("client/js/poll.js", ["client"]);
     api.add_files("client/js/subscribe.js", ["client"]);
    api.add_files("client/css/poll.css", ["client"]);


    // api.add_files("lib/client/semantic-ui/custom.semantic.json", ["client"]);

    // static assets; needs cleanup

    // api.addFiles([
    //   'public/img/cubes.png',
    //   'public/img/header-bg.png'

    // ], 'client');


    // i18n languages (must come last)

    // api.addFiles([
    //   'i18n/en.i18n.json'
    // ], ['client', 'server']);

});
