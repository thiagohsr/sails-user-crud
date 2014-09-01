/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  'signup': function(req, res){
    res.view();
  },
  create: function(req, res, next) {
    User.create(req.params.all(), function userCreated(err, user){
      if(err){
        req.session.flash = {
          err: err
        }
        return res.redirect('/user/signup/');
      } 
      res.redirect('/user/show/' + user.id);
    });
  },
  show:function(req, res, next){
    User.findOne(req.param('id'), function foundUser(err, user){
      if(err) return next(err);
      if(!user) return next();
      return res.view({
        user: user
      });
    });
  },
  index: function(req, res){
    User.find(function foundUsers(err, users){
      if(err) next(err);

      res.view({
        users: users
      });
    });
  },
  edit: function(req, res){
    User.findOne(req.param('id'), function editUser(err, user){
      if(err) next(err);

      res.view({
        user: user
      });
    });
  },
  update: function(req, res, next){
    User.update(req.param('id'), req.params.all(), function userUpdate(err){
      if(err) {
        return res.redirect('/user/edit/'+ req.param('id'));
      }
      res.redirect('/user/show/'+ req.param('id'));
    });
  },
  destroy: function(req, res, next){
    User.findOne(req.param('id'), function foundUser(err, user){
      if(err) return next();

      if(!user) return next('Usuário inexistente.');
      User.destroy(req.param('id'), function userDestroyed(){
        if(err) return next(err);
      });
      res.redirect('/user');
    });
  }
};

