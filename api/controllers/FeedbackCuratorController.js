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
	FeedbackCurator.update(
			{'feedback_id': req.param("fid")},
			{'offer_details.discount' : req.param("discount"),
			 'offer_details.offer_info' : req.param("offer_info"),
			 'offer_details.offer_sent' : req.param("offer_sent"),
			 'offer_details.offer_status' : req.param("offer_status"),
			 'offer_details.refund_amount' : req.param("refund_amount"),
		    }
			).exec(function(err, feeds){
			if(err) {return next(err);}
		FeedbackCurator.publishCreate({id:sails.sockets.id(req),feedback_id:feedback_id.feedback_id,offer_details:offer_details.offer_details});
            console.log('SEnd offer agent has been created');
		});
 } else if (req.isSocket){

          FeedbackCurator.watch(req);
          console.log('User with socket id '+sails.sockets.id(req)+' is now subscribed to the model class \'users\'.');

  }  else {

	FeedbackCurator.update(
			{'feedback_id': req.param("fid")},
			{'offer_details.discount' : req.param("discount"),
			 'offer_details.offer_info' : req.param("offer_info"),
			 'offer_details.offer_sent' : req.param("offer_sent"),
			 'offer_details.offer_status' : req.param("offer_status"),
			 'offer_details.refund_amount' : req.param("refund_amount"),
		    }
			).exec(function(err, feeds){
			if(err) {return next(err);}
	
			return res.send('success');
		});

 }


},

buyerview : function (req, res){
	FeedbackCurator.find({'buyer_id': req.param("bid")}).exec(function foundUsers(err, feedbacks){
		if(err) return next(err);
		res.json(feedbacks);
	});
},

acceptoffer : function (req, res){
	FeedbackCurator.update(
			{'feedback_id': req.param("fid")},
			{'offer_details.discount' : req.param("discount"),
			 'offer_details.offer_info' : req.param("offer_info"),
			 'offer_details.offer_sent' : req.param("offer_sent"),
			 'offer_details.offer_status' : req.param("offer_status"),
			 'offer_details.refund_amount' : req.param("refund_amount"),
		    }
			).exec(function(err, feeds){
			if(err) {return next(err);}
			return res.send('success');
		});
}


	
};

