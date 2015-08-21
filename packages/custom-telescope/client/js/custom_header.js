Template.header.rendered = function() {
    console.log(this.data);

    $('.ui.menu .ui.dropdown').dropdown({
        on: 'hover'
    });
    $('.ui.menu a.item')
        .on('click', function() {
            $(this)
                .addClass('active')
                .siblings()
                .removeClass('active');
        });


};
Meteor.startup(function(){
console.log("testing")
    $('body').addClass('fullbleed layout vertical')
})