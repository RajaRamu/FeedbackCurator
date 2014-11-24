/**
 * FeedbackController
 *
 * @description :: Server-side logic for managing Feedbacks
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	viewfeedback : function (req, res){
		Feedback.find({'feedback_id': req.param("fid")}).exec(function foundFeedbacks(err, feedbacks){
			if(err) return next(err);
			res.json(feedbacks);
			//res.view({feedbacks : feedbacks})
		});
		//res.view();
	},

	updatefeedback : function (req, res){
		Feedback.find({'seller_id': req.param("sid")}).exec(function foundFeedbacks(err, feedbacks){
			if(err) return next(err);
			res.json(feedbacks);
			//res.view({feedbacks : feedbacks})
		});
		//res.view();
	}
	
};

