Package.describe({
    name: 'biolog:telescope-summernote',
    version: '0.0.1',
    // Brief, one-line summary of the package.
    summary: '',
    // URL to the Git repository containing the source code for this package.
    git: '',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.0.2');
    api.use('ecmascript');
    api.use(["telescope:core", "summernote:summernote", "cfs:standard-packages", "cfs:filesystem", "mongo", "ostrio:meteor-root", "vazco:universe-html-purifier"]);


    api.addFiles([
        'client/templates/custom_post_body.html',
        'client/js/summernote.js',
        'client/scss/summernote.scss'

    ], ['client']);
    api.addFiles([
        'lib/post.js'

    ], ['server', 'client']);
      api.addFiles([
        'lib/images.js'

    ], ['server']);
    api.addFiles('telescope-summernote.js');
   
  // api.export("Feed", ['client']);

});

Package.onTest(function(api) {
    api.use('ecmascript');
    api.use('tinytest');
    api.use('biolog:telescope-summernote');
    api.addFiles('telescope-summernote-tests.js');
});