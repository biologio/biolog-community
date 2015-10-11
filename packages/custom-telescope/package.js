Package.describe({
    summary: 'Telescope custom package – use for customization to Telescope app',
    version: '0.1.0',
    name: 'biolog:custom-telescope'
});

Package.onUse(function(api) {


    api.use(["telescope:core"]);




    // i18n config (must come first)

    api.addFiles([
        'package-tap.i18n'
    ], ['client', 'server']);

    // client & server

    api.addFiles([
        'lib/custom_fields.js',
        'lib/template_modules.js',
        'lib/callbacks.js',
        'lib/posts.js'
    ], ['client', 'server']);

    // client

    api.addFiles([
        'client/templates/custom_layout.html',
        'client/templates/custom_logo.html',
        'client/templates/custom_header.html',
        'client/templates/custom_post_thumbnail.html',
        'client/templates/custom_search.html',
        'client/templates/custom_loading.html',
        'client/templates/custom_footer_code.html',
        'client/templates/custom_post_share.html',
        'client/js/custom_menuComponent.js',
        'client/stylesheets/scss/screen.scss',
        'client/stylesheets/custom.scss'

    ], ['client']);

    // server

    api.addFiles([
        'server/templates/custom_emailWrapper.handlebars',
        'server/templates/custom_emailPostItem.handlebars',
        'lib/email_template.js'
    ], ['server']);

    // i18n languages (must come last)

    api.addFiles([
        'i18n/en.i18n.json'
    ], ['client', 'server']);

});