Meteor.publish("polls", function(call){
	console.log(call);
	 return Polls.find({});
})

// run this when the meteor app is started
Meteor.startup(function() {
console.log("count", Polls.find().count())
  // if there are no polls available create sample data
  if (Polls.find().count() === 0) {

    // create sample polls
    var samplePolls = [
      {
        question: 'Is Meteor awesome?',
        isActive: true,
        createdAt: new Date(),
        closingDate: new Date('Sun Aug 16 2015'),
        choices: [
          { text: 'Of course!', votes: 0 },
          { text: 'Eh', votes: 0 },
          { text: 'No. I like plain JS', votes: 0 }
        ]
      },
      {
        question: 'Is CSS3 Flexbox the greatest thing since array_slice(bread)?',
        isActive: true,
         createdAt: new Date(),
        closingDate: new Date('Sun Aug 16 2015'),
        choices: [
          { text: '100% yes', votes: 2 },
          { text: '200% yes', votes: 3 },
          { text: '300% yes', votes: 0 }
        ]
      }
    ];

    // loop over each sample poll and insert into database
    _.each(samplePolls, function(poll) {
      Polls.insert(poll);
    });

  }

});

Polls.allow({
	insert: function (userId, doc) {
		return true
	},
	update: function (userId, doc, fields, modifier) {
		//...
	},
	remove: function (userId, doc) {
		//...
	},
	fetch: ['owner'],
	transform: function () {
		//...
	}
});



Meteor.methods({
  addPoll: function (poll) {
    console.log(poll)
    check(poll, {
    question: String,
    createdAt:Date,
    isActive:Boolean,
    closingDate: Date,
    // Optional, but if present must be an array of strings.
    choices: Match.Optional([Object])

  });
    console.log(poll);
    Polls.insert(poll);

  },
  vote: function(id, choice){
    var where = {  _id: id,"choices.text": choice  }
    console.log(where);
    Polls.update(where, { $inc: {  "choices.$.votes": 1 }}, function(err, data){
      if(!err){
        return data
        Materialize.toast('<span>Poll Added</span>', 5000);
      }
      else{
        Materialize.toast('<span>'+error.reason+'</span>', 5000);
      }
      console.log(err)
    });
    //Polls.update(where, { $inc: {  "choice.vote": 1 } });
  }
});
