const jwt = require('jsonwebtoken');
const  User  = require('../Models/User');

 // header method
function auth(req, res , next) {
  const token = req.header('zack-auth');
  if(!token){
      return res.status(401).send('bad request token le kar aa bhai')
  }

 
 try {
      const verified = jwt.verify(token , 'secretchabi');
      if(verified) {
          // extracting id
          
          User.findOne({_id : verified.ID}).then((user) => {
            // if not token doesnot exists in db
           
          
            if(token !== user.token) {
              res.status(200).json({
                isAuth: false,
                message : "You are not logged in!",
                  comming: token , 
                  dbToken : user.token
              }
              
              )
            

            }else {
              res.locals.user = user;
              next();
            }


             
            }).catch(err => res.send(err));

         
         
       
         
      }
      
   }catch(err) {
       res.status(400).send("invalid token");
  }
}


//#######################################





module.exports = auth;