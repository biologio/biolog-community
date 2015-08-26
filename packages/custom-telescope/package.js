Package.describe({
  summary: 'Telescope custom package – use as template for your own packages',
  version: '0.1.0',
  name: 'biolog:custom-telescope'
});

Package.onUse(function (api) {

  // ---------------------------------- 1. Core dependency -----------------------------------

  api.use(["telescope:core", "jeremy:telescope-plugin-hero"]);


  // ---------------------------------- 2. Files to include ----------------------------------

  // i18n config (must come first)

  api.addFiles([
    'package-tap.i18n'
  ], ['client', 'server']);

  // client & server
api.addFiles(['lib/collection.js'],'server');
  api.addFiles([
    'lib/custom_fields.js',
    'lib/template_modules.js',
    'lib/callbacks.js'
  ], ['client', 'server']);

  // client

  api.addFiles([
    'client/templates/custom_layout.html',
    'client/templates/custom_logo.html',
    // 'client/templates/custom_menuComponent.html',
    // 'client/templates/custom_menuItem.html',
    'client/templates/custom_header.html',
    'client/js/custom_header.js',
    // 'client/templates/custom_notifications_menu.html',
    // 'client/templates/custom_pages_menu.html',
    // 'client/templates/custom_post_author.html',
    // 'client/templates/custom_post_content.html',
    // 'client/templates/custom_post_info.html',
    // 'client/templates/custom_post_item.html',
    'client/templates/custom_post_thumbnail.html',
    // 'client/templates/custom_posts_list.html',
    'client/templates/custom_search.html',
    'client/templates/categories.html',
     'client/templates/custom_loading.html',
     'client/templates/custom_footer_code.html',
       'client/templates/custom_post_share.html',
    'client/js/categories.js',
    // 'client/templates/custom_submit_button.html',
    // 'client/templates/custom_user_menu.html',
    'client/js/custom_menuComponent.js',
       'client/js/custom_post_submit.js',
    'client/stylesheets/scss/screen.scss',
    'client/stylesheets/custom.scss'

  ], ['client']);

  // server

  api.addFiles([
    'server/templates/custom_emailPostItem.handlebars'
  ], ['server']);

  // i18n languages (must come last)

  api.addFiles([
    'i18n/en.i18n.json'
  ], ['client', 'server']);

});
