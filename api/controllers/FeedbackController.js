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
		Feedback.update(
			{'feedback_id': req.param("fid")},
			{'feedback_Question' : req.param("fq"),
			 'feedback_comments' : req.param("fc"),
			 'feedback_rating' : req.param("fr")
		    }
			).exec(function(err, feeds){
			if(err) {return next(err);}
			return res.send('success');
			//res.view({feedbacks : feedbacks})
		});
		//res.view();
	}
	
};
