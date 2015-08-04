Package.describe({
  summary: 'Telescope custom package – use as template for your own packages',
  version: '0.1.0',
  name: 'biolog:custom-telescope'
});

Package.onUse(function (api) {

  // ---------------------------------- 1. Core dependency -----------------------------------

  api.use("telescope:core");

  // ---------------------------------- 2. Files to include ----------------------------------

  // i18n config (must come first)

  api.addFiles([
    'package-tap.i18n'
  ], ['client', 'server']);

  // client & server

  api.addFiles([
    'lib/custom_fields.js',
    'lib/template_modules.js',
    'lib/callbacks.js'
  ], ['client', 'server']);

  // client

  api.addFiles([
    'lib/client/templates/custom_layout.html',
    'lib/client/templates/custom_logo.html',
    'lib/client/templates/custom_menuComponent.html',
    'lib/client/templates/custom_menuItem.html',
    'lib/client/templates/custom_nav.html',
    'lib/client/templates/custom_notifications_menu.html',
    'lib/client/templates/custom_pages_menu.html',
    'lib/client/templates/custom_post_author.html',
    'lib/client/templates/custom_post_content.html',
    'lib/client/templates/custom_post_info.html',
    'lib/client/templates/custom_post_item.html',
    'lib/client/templates/custom_post_thumbnail.html',
    'lib/client/templates/custom_posts_list.html',
    'lib/client/templates/custom_search.html',
    'lib/client/templates/custom_submit_button.html',
    'lib/client/templates/custom_user_menu.html',
    'lib/client/templates/custom_menuComponent.js'

  ], ['client']);

  // server

  api.addFiles([
    'lib/server/templates/custom_emailPostItem.handlebars'
  ], ['server']);

  // i18n languages (must come last)

  api.addFiles([
    'i18n/en.i18n.json'
  ], ['client', 'server']);

});
