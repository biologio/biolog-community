Package.describe({
    name: "biolog:custom-landing",
    summary: "Landing page with app features",
    version: "0.1.0"

});

Package.onUse(function(api) {


    api.use([
        'templating',
           'telescope:core@0.21.1',
      'telescope:theme-base@0.21.1',
      'telescope:theme-hubble@0.21.1',
        'iron:router',
        'lawshe:full-page',
        'mystor:device-detection',
        'spacebars',
        'natestrauser:animate-css',
        
        
        
        'flemay:less-autoprefixer'
       

    ], 'client');

     // i18n config (must come first)

  api.addFiles([
    'package-tap.i18n'
  ], ['client', 'server']);


    api.add_files("lib/client/layout/landingLayout.html", ["client"]);
    api.add_files("lib/client/templates/landing.html", ["client"]);
    api.add_files("lib/client/templates/grid.html", ["client"]);
    api.add_files("lib/client/js/modernizr.js", ["client"]);
    api.add_files("lib/client/routes/router.js", ["client"]);
    api.add_files("lib/client/js/landingLayout.js", ["client"]);
    api.add_files("lib/client/js/landing.js", ["client"]);
    api.add_files("lib/client/js/classie.js", ["client"]);
    api.add_files("lib/client/js/grid.js", ["client"]);
    api.add_files("lib/client/stylesheets/grid.css", ["client"]);
    
    // api.add_files("lib/client/semantic-ui/custom.semantic.json", ["client"]);
    api.add_files("lib/client/stylesheets/landing.scss", ["client"]);

     // static assets; needs cleanup

  api.addFiles([
    'public/img/cubes.png',
    'public/img/header-bg.png'
    
  ], 'client');


    // i18n languages (must come last)

  // api.addFiles([
  //   'i18n/en.i18n.json'
  // ], ['client', 'server']);

});
