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
	FeedbackCurator.find({'seller_id': req.param("sid")}).exec(function foundUsers(err, feedbacks){
		if(err) return next(err);
		res.json(feedbacks);
		//res.view({feedbacks : feedbacks})
	});
	//res.view();
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
	FeedbackCurator.find({'seller_id': req.param("sid")}).exec(function foundUsers(err, feedbacks){
		if(err) return next(err);
		res.json(feedbacks);
		//res.view({feedbacks : feedbacks})
	});
	//res.view();
}


	
};

