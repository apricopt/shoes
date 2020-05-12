const express = require('express');
const router = express.Router();



const jwt = require('jsonwebtoken');
const  User    = require('../Models/User');
const auth = require('../Middlewares/verifytoken');













router.get('/' , (req , res) => {
    res.send("Welcome to zaybi's first heroku website");
  })
  
  
  // @POST Registring user
  router.post('/register' , (req ,res) => {
      const user = new User({
          name: req.body.firstname,
          email: req.body.email,
          password: req.body.password,
          lastname: req.body.lastname,
         
      });
  
      user.save().then((data) => {
          res.json(data);
          console.log("response has been given");
      }).catch(err => {
          res.json({message : err})
      })
    
  });
  
  
  //  @POST login
 router.post('/login' , (req , res) => {
      //find email
    User.findOne({email : req.body.email}).then(user => {
  
     // for wrong email
     if(user.email !== req.body.email) {
      res.json({
          userID : user._id,
          userName : user.name,
          loginSucess: false
      })
  }
  //__ wrong pas email
     
     
     
     
     
      // for wrong password
        if(user.password !== req.body.password) {
            res.json({
                message: "Password donot match",
                loginSucess: false
            })
        }
        //__ wrong pas ended
  
  
        
       
      // token generating starts
        const token =  jwt.sign({ID : user._id} , "secretchabi");
  
      User.updateOne({_id : user._id} ,
                  {$set: { token : token}}
      ).then(data => console.log(data));
  
           res.header("zack-auth" , token).status(200).json({
            userID : user._id,
            userName : user.name,
            loginSucess: true
      });
  
      //token generating ends
  
    }).catch(err => res.json({
      err : err ,
      message: "email do not exist",
      loginSucess: false
    }))
  
  
  });
  
  
  //@get LOGOUT 
  router.get('/logout' , auth, (req , res ) => {
   
    User.updateOne({_id : res.locals.user._id} ,
      {$set: { token : null}}
  )
  .then(response => res.json({
    loginSucess : false,
    message: "user has been logged out successfully",
    response: response
  
  }))
  .catch(err => res.send(err));
  
      
  
  })
  
  
  
  
       
  
  router.get('/' , auth , (req , res) => {
     res.json({id: res.locals.user});
  })



  module.exports = router;