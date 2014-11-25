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
		//res.json(feedbacks);
		res.type("html");
		res.view("buyerview" , {feedback:feedbacks});
	});
	//res.view();
},

sendoffer : function (req, res){
 if (req.param("fid") != null && req.isSocket){
 	var feedbackId = req.param("fid");
 	var discount = req.param("discount");
 	var offerInfo = req.param("offer_info");
 	var offerSent = req.param("offer_sent");
 	var offerStatus = req.param("offer_status");
 	var refundAmount = req.param("refund_amount");
	FeedbackCurator.update(
			{'feedback_id': feedbackId},
			{'offer_details.discount' : discount,
			 'offer_details.offer_info' : offerInfo,
			 'offer_details.offer_sent' : offerSent,
			 'offer_details.offer_status' : offerStatus,
			 'offer_details.refund_amount' : refundAmount,
		    }
			).exec(function(err, feeds){
			if(err) {return next(err);}
		FeedbackCurator.publishCreate({id:sails.sockets.id(req),feedback_id:feedbackId,type:"sendoffer",
			discount:discount,offerInfo:offerInfo,offerSent:offerSent,offerStatus:offerStatus,refundAmount:refundAmount});
            console.log('SEnd offer agent has been created');
		});
 } else if (req.isSocket){

          FeedbackCurator.watch(req);
          console.log('SEND OFFER: Feedbackcurators with socket id '+sails.sockets.id(req)+' is now subscribed to the model class \'Feedbackcurators\'.');

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
		//res.json(feedbacks);
		res.type("html");
		res.view("buyerview1" , {feedback:feedbacks});
	});
},

acceptoffer : function (req, res){
	/*FeedbackCurator.update(
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
*/


if (req.param("fid") != null && req.isSocket){
 	var feedbackId = req.param("fid");
 	var discount = req.param("discount");
 	var offerInfo = req.param("offer_info");
 	var offerSent = req.param("offer_sent");
 	var offerStatus = req.param("offer_status");
 	var refundAmount = req.param("refund_amount");
	FeedbackCurator.update(
			{'feedback_id': feedbackId},
			// {'offer_details.discount' : discount,
			//  'offer_details.offer_info' : offerInfo,
			//  'offer_details.offer_sent' : offerSent,
			{'offer_details.offer_status' : "Accepted",
			// 'offer_details.refund_amount' : refundAmount,
		    }
			).exec(function(err, feeds){
			if(err) {return next(err);}
		FeedbackCurator.publishCreate({id:sails.sockets.id(req),feedback_id:feedbackId,type:"acceptoffer",
			discount:discount,offerInfo:offerInfo,offerSent:offerSent,offerStatus:offerStatus,refundAmount:refundAmount});
            console.log('SEnd offer agent has been created');
		});
 } else if (req.isSocket){

          FeedbackCurator.watch(req);
          console.log('ACCEPT OFFER: FeedbackCurator with socket id '+sails.sockets.id(req)+' is now subscribed to the model class \'Feedbackcurators\'.');

  }  else {

	FeedbackCurator.update(
			{'feedback_id': req.param("fid")},
			// {'offer_details.discount' : req.param("discount"),
			//  'offer_details.offer_info' : req.param("offer_info"),
			//  'offer_details.offer_sent' : req.param("offer_sent"),
			{'offer_details.offer_status' : "Accepted",
			 //'offer_details.refund_amount' : req.param("refund_amount"),
		    }
			).exec(function(err, feeds){
			if(err) {return next(err);}
	
			return res.send('success');
		});

 }
}


	
};

