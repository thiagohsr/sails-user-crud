/**
* Events.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  schema: true,

  attributes: {
    eventDate:{
      type: 'datetime',
      required: true,
      unique: true
    },  
    eventType:{
      type: 'string',
      required: true
    },
    owner:{
      model: 'User'
    }
  }
};

