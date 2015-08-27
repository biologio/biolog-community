// Telescope.modules.remove("postHeading", "post_categories");
Telescope.modules.remove("primaryNav", "search");
Telescope.modules.add("secondaryNav", {
    template: 'search',
    order: 1
});

Telescope.modules.add("hero", {
    template: "biologCategories",
    order: 2
});
//Telescope.modules.remove("top","posts_views_nav");
