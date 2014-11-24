/**
 * FeedbackCuratorController
 *
 * @description :: Server-side logic for managing Feedbackcurators
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

sellerview : function (req, res){
	FeedbackCurator.find({'seller_id': req.param("sid")}).exec(function foundUsers(err, feedbacks){
		if(err) return next(err);
		res.json(feedbacks);
		//res.view({feedbacks : feedbacks})
	});
	//res.view();
},

sendoffer : function (req, res){
		
 if (req.param("fid") != null && req.isSocket){

 	var feedback_id =	{'feedback_id': req.param("fid")};
			var offer_details = {'offer_details' : req.param("od") };

 	FeedbackCurator.update(
			feedback_id,
			offer_details
			).exec(function(err, feeds){
			if(err) {return next(err);}
		FeedbackCurator.publishCreate({id:sails.sockets.id(req),feedback_id:feedback_id.feedback_id,offer_details:offer_details.offer_details});
            console.log('SEnd offer agent has been created');
			//return res.send('success');
			//res.view({feedbacks : feedbacks})
		});
 } else if (req.isSocket){

          FeedbackCurator.watch(req);
          console.log('User with socket id '+sails.sockets.id(req)+' is now subscribed to the model class \'users\'.');

  }  else {

 	FeedbackCurator.update(
			feedback_id,
			offer_details
			).exec(function(err, feeds){
			if(err) {return next(err);}
	
			return res.send('success');
			//res.view({feedbacks : feedbacks})
		});

 }


},


buyerview : function (req, res){
	FeedbackCurator.find({'buyer_id': req.param("bid")}).exec(function foundUsers(err, feedbacks){
		if(err) return next(err);
		res.json(feedbacks);
		//res.view({feedbacks : feedbacks})
	});
	//res.view();
},

acceptoffer : function (req, res){
	FeedbackCurator.update(
			{'feedback_id': req.param("fid")},
			{'offer_details' : req.param("od")
		    }
			).exec(function(err, feeds){
			if(err) {return next(err);}
			return res.send('success');
			//res.view({feedbacks : feedbacks})
		});
	//res.view();
}


	
};

