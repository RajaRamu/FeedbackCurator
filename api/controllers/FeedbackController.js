/**
 * FeedbackController
 *
 * @description :: Server-side logic for managing Feedbacks
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	viewfeed : function (req, res){
		Feedback.find({'feedback_id': req.param("fid")}).exec(function foundFeedbacks(err, feeds){
			if(err) return next(err);
			res.json(feeds);
			//res.view({feedbacks : feedbacks})
		});
		//res.view();
	},

	updatefeed : function (req, res){
		Feedback.find({'feedback_id': req.param("fid")}).exec(function foundFeedbacks(err, feeds){
			if(err) return next(err);
			res.json(feeds);
			//res.view({feedbacks : feedbacks})
		});
		//res.view();
	}
	
};

