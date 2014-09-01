/**
 * EventsController
 *
 * @description :: Server-side logic for managing events
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  list:function(req, res){
      res.view();
  },
  'register': function(req, res) {
    EventTypes.find(function(err, eventTypes){
      res.view({
        eventTypes: eventTypes
      });
    });
    
  },
  create: function(req, res){

  }
};

