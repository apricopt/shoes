import React , { useContext , useState } from 'react';
import {LoginContext} from '../../logincontext';
import { Alert } from 'reactstrap';
import {Redirect} from 'react-router'

const axios = require('axios');




function Login()  {
  
  
  const [email , setEmail ] = useState("");
  const [password , setPassword ] = useState("");
  const [loginStatus , setLoginStatus ] = useState("");
  const [loginMessage , setLoginMessage ] = useState("");
  
 const [login , setLogin]= useContext(LoginContext);





 
  


    function handleChange(e) {
      if(e.target.name=="email") {
        setEmail(e.target.value)
      }
      else {
        setPassword(e.target.value)
      }
      
    
       
     
    }

  
   


  function  handleSubmit(e) {
      e.preventDefault();

      
     


      axios({
        method: 'post',
        url: 'http://localhost:5000/api/user/login',
        data: {
          email: email,
          password : password  
        }
      })
      .then( response => {


        console.log(response.data);
        setLogin(response.data);
        setLoginMessage({message : response.data.message});
        setLoginStatus({ loginSucess : response.data.loginSucess}) ;
        
       

        console.log(loginMessage , loginStatus);
      

      
        
        
        
        
        
      }
      
      )
      .catch(err => console.log(" error agya bhai" ,err));
      
      
    }
    
    
   
   
    
  
    if (loginStatus){
    return <Redirect to='/'  />
} else {
    return(
      <React.Fragment>
            <div class="container my-5 px-0 z-depth-1">


        <section class="p-5 my-md-5 text-center" 
style={{"backgroundSize":"cover","backgroundPosition":"center center"}}>

  <form class="my-5 mx-md-5" action="" style={{}}>

    <div class="row">
      <div class="col-md-6 mx-auto">
     
        <div class="card">

         
          <div class="card-body" style={{border:"2px inset wheat",color: "#757575"}} >

           
            <form class="text-center p-" onSubmit={handleSubmit}>

              <h3 class="font-weight-bold my-4 pb-2 text-center dark-grey-text">Log In</h3>

          
              <input onChange={handleChange} value={email} type="email" name="email" class="form-control mb-4" placeholder="Email" />

              
              <input onChange={handleChange} value={password} type="password" name="password" class="form-control" placeholder="Password" />
              <small id="passwordHelpBlock" class="form-text text-right blue-text">
                <a href="/register">Create an Account?</a>
              </small>

              <div class="text-center">
                <button type="submit" style={{boxShadow:"0px 0px 5px #9c0c5c"}} class="btn  btn-rounded my-4 " >Login</button>
              </div>

            </form>

            
             <LoginAlert loginStatus={loginStatus} loginMessage={loginMessage} /> 
      
         

          </div>

        </div>
       
      </div>
    </div>

  </form>

</section>



</div>



            </React.Fragment>
        )

    }

    
        


    }



    function LoginAlert(props) {


 



      if(props.loginStatus.loginSucess == false) {
        return (
          <Alert color="danger">
        {props.loginMessage.message}
      </Alert>
        
        )
       
      }else{
        return(
          <span></span>
        )
      }

    }




export default Login;