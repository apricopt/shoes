import React , { Component } from 'react';
import {Redirect} from 'react-router';
const axios = require('axios');


class Register extends Component {

    constructor(){
        super();

        this.state = {
          firstname : "" ,
          lastname : "" ,
          email : "" ,
          password1: "",
          password2: "",

          registerSucess: ""


        }

        this.handleChange= this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    }


    handleChange(e) {
      this.setState({[e.target.name] : e.target.value})
    }

    handleSubmit(e) {
      e.preventDefault();
    

      axios({
        method: 'post',
        url: 'http://localhost:5000/api/user/register',
        data: {
          firstname: this.state.firstname,
          lastname : this.state.lastname,
          email: this.state.email,
          password : this.state.password1,
          
        }
      }).then(response => {
        this.setState({registerSucess : true});
          
      }).catch(err => console.log(err));
    
    }




    render() {

      if(this.state.registerSucess){
        return <Redirect to="/login" />
      }else {

        return(
            <React.Fragment>
            <div class="container my-5 px-0 z-depth-1">


        <section class="p-5 my-md-5 text-center" 
style={{"backgroundSize":"cover","backgroundPosition":"center center"}}>

  <form class="my-5 mx-md-5" action="" style={{}}>

    <div class="row">
      <div class="col-md-6 mx-auto">
     
        <div class="card">

         
          <div class="card-body" style={{border:"2px inset #9c0c5c",color: "#757575"}} >

           
            <form class="text-center p-" onSubmit={this.handleSubmit}>

              <h3 class="font-weight-bold my-4 pb-2 text-center dark-grey-text">Create an Account</h3>

          
              <input  onChange={this.handleChange} value={this.state.firstname} name="firstname" type="text" class="form-control mb-4" placeholder="FirstName" />
              <input  onChange={this.handleChange} value={this.state.lastname}  name="lastname" type="text" class="form-control mb-4" placeholder="LastName" />
              <input  onChange={this.handleChange} value={this.state.email}  name="email" type="email"  class="form-control mb-4" placeholder="Email Address" />
              <input  onChange={this.handleChange} value={this.state.password1}  name="password1" type="password" class="form-control mb-4" placeholder="Password" />
              <input  onChange={this.handleChange} value={this.state.password2}  name="password2" type="password"  class="form-control" placeholder="Confirm Password" />


              <small id="passwordHelpBlock" class="form-text text-right blue-text">
                
              </small>

              <div class="text-center">
                <button type="submit" style={{boxShadow:"0px 0px 5px #9c0c5c"}} class="btn  btn-rounded my-4 ">Register</button>
              </div>

            </form>
         

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

}


export default Register;