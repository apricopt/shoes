import React from 'react';
import Background from '../images/shoes2.jpg';





function Slider() {



  return(
    <div className="container-fluid   px-0 z-depth-1">


  <section className="text-center hero text-lg-left white-text grey p-5"
style={{backgroundImage: `url(${Background})`, backgroundPosition : "20% 60%"}}>

    <div className="row">

      <div className="col-md-6 offset-md-2 pt-5 mt-5">

          <h3 className="font-weight-bold">Shoes for life</h3>

          <h5 className="h5">Highest quality, Solid Promise</h5>

          <p className="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam sapiente molestiae
            numquam quas, voluptates omnis nulla ea odio quia similique corrupti magnam.</p>

          <a href="#" className="btn btn-outline-white btn-md waves-effect" role="button"><i className="fas fa-tag mr-2"></i>Buy Now</a>

      </div>
      

    </div>
   

  </section>
 


</div>

  )
}



export default Slider;