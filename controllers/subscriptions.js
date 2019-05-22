const User = require('../models/user');

exports.createSubscription = function(req, res, next) {

    // Require auth
    const user = req.user;
  
    if (!user) {
      return res.status(422).json({
        message: 'You must sign in before you can subscribe.'
      });
    }
  
    // author ID
    const authorId = req.params.authorId;
    // user ID
    const userId = req.params.userId;
  
    User.findByIdAndUpdate(userId, { $push: {
        subscriptions: authorId
      } }, { new: true }, function(err, updatedUser) {
        if (err) {
          return next(err);
        }
        // Return updated user profile
        res.send({ user: updatedUser });
      })
  };
  