var express = require('express');
var router = express.Router();
const passport = require ('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/keys');

const User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next){
  // res.send('respond with a resource');
  res.send('respond with a resource!!');

});

// Register

router.post ('/register', function(req, res, next){
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });

  User.addUser(newUser, (err, user) => {
     if(err){
       res.json({success: false, msg: 'Failled to register user'});
     } else {
       res.json({success: true, msg: 'User registered'});
     }
  });
});

// Authenticate

router.post('/authenticate', function(req, res, next){
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user)=>{
    if(err) throw err
    if(!user){
      return res.json({success: false, msg: 'User not found'});
    };

    User.comparePassword(password, user.password, (err, isMatch) =>{
      if(err) throw err;

      if(isMatch){
        const token = jwt.sign({data: user}, config.secret, {
          expiresIn: 604800 // 1 week
        });
        
        res.json( {
          success: true,
          token: `Bearer ${token}`,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        });
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});

//Profile

router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next) =>{
  res.json({user: req.user})
})

module.exports = router;

