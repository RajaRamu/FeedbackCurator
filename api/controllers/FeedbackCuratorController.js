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
	FeedbackCurator.update(
			{'feedback_id': req.param("fid")},
			{'offer_details' : req.param("od")
		    }
			).exec(function(err, feeds){
			if(err) {return next(err);}
			return res.send('success');
			//res.view({feedbacks : feedbacks})
		});
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

