Meteor.subscribe("polls", 'called');

Session.setDefault("isNewPoll", null);
Template.poll.helpers({
    pollList: function() {
        return Polls.find({
            isActive: true
        }, {
            sort: {
                createdAt: -1
            }
        });

    },
    isNewPoll: function() {
        return Session.get("isNewPoll")
    }
});
Template.poll.rendered = function() {

    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });
    $('#creatPoll').parsley({
        trigger: 'change'
    });

};
Template.poll.events({
    'click #create': function(e, tpl) {
        e.preventDefault();
        Session.set("isNewPoll", true);
    },
    'submit #creatPoll': function(e, tpl) {
        var poll = {};
        e.preventDefault();
        poll.question = tpl.find(".question").value;
        poll.createdAt = new Date();
        poll.isActive = true;
        poll.closingDate = new Date(tpl.find(".datepicker").value);
        options = tpl.findAll('.option');
        console.log(question, options);
        var arrOptions = [];
        _.each(options, function(item, index) {


            arrOptions.push({
                text: item.value,
                votes: 0
            });
        })
        console.log(arrOptions);
        poll.choices = arrOptions;
        console.log(poll);
        Meteor.call("addPoll", poll, function(err, data) {
            if (!err) {
                console.log("inserted");
                Session.set("isNewPoll", false);
                Materialize.toast('Poll Created!', 4000);
            } else {
                Materialize.toast(err.reason, 4000);
            }
        })


    },
    'click .moreOption': function(e, tpl) {
        var optionNumber = tpl.findAll('form .row').length;
        e.preventDefault();
        //var row = createElement('div');
        //$(row).addClass('row');
        option = createOption(optionNumber);
        console.log(option);
        $(option).insertBefore($(tpl.find("form #datepicker")));
        //$(tpl.find("form .row:last")).append(option);

        //var option = '<div class="row"> <div class="input-field col s12"><input id="option4" type="text" required class="validate option"> < label
        //for = "option4" data - error = "wrong" data - success = "right" > Option 4 < /label> < /div> < /div>';

    },
    'click #vote': function(e, tpl) {
        console.log(this._id);
        var selectedOption = $(e.currentTarget).parents(".card-content").find("input[type=radio]:checked");

        var choice = selectedOption.data("choice");

        if (!choice) {
            Materialize.toast('Please select an option!', 4000);
            return;
        }
        Meteor.call('vote', this._id, choice, function(err, data) {
            if (!err) {
                console.log(data);
                Materialize.toast('Thank you for participation!', 4000);
                selectedOption.attr('checked', false);
            } else {
                Materialize.toast(err.error, 4000);
            }
        });
    },
    'click .back': function(e, tpl) {
        Session.set("isNewPoll", false);
    }
});

function createOption(optionLabel) {
    var row = document.createElement('div');
    var inputField = document.createElement('div');
    var input = document.createElement('input');
    var label = document.createElement('label');
    var textNode = document.createTextNode("Option " + optionLabel);
    input.type = "text";
    input.id = "option" + optionLabel;
    input.required = true;

    label.for = "option" + optionLabel;
    label.dataset.error = "wrong";
    label.dataset.success = "right";

    label.appendChild(textNode);


    //setting attribute one by one
    if (row.classList) {
        row.classList.add("row");
        inputField.classList.add("input-field", "col", "s12");
        input.classList.add("validate", "option");
    } else {
        $(row).addClass("row");
        $(inputField).addClass("input-field col s12");
        $(input).addClass("validate option");
    }
    // adding to its parent element
    inputField.appendChild(input);
    inputField.appendChild(label);
    row.appendChild(inputField);
    return row;

}

Template.pollLayout.helpers({

    isNewPoll: function() {

        return Session.get("isNewPoll");
    }
});
Template.pollLayout.events({
    'click #create': function(e, tpl) {
        console.log("true");
        e.preventDefault();

        Session.set("isNewPoll", true);
    }
});


UI.registerHelper('indexedArray', function(context, options) {
    if (context) {
        return context.map(function(item, index) {
            item._index = index;
            return item;
        });
    }
});