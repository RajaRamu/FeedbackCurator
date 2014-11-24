/**
 * OffersController
 *
 * @description :: Server-side logic for managing offers
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
	handleoffers: function(req,res){

        var nameSent = req.param('name');

        if (nameSent && req.isSocket){

          FeedbackCurator.create({name:nameSent}).exec(function created(err,newGuy){
            FeedbackCurator.publishCreate({id:newGuy.id,name:newGuy.name});
            console.log('A new user called '+newGuy.name+' has been created');
          });

        } else if (req.isSocket){

          FeedbackCurator.watch(req);
          console.log('User with socket id '+sails.sockets.id(req)+' is now subscribed to the model class \'users\'.');

        } 
    }

};

