import React , { Component } from 'react';
import Slider from '../tinycomponents/slider'
import Cardz from '../tinycomponents/card'
import Sidebar from '../tinycomponents/sidebar'
import { StickyContainer, Sticky } from 'react-sticky';


import { Col , Row } from 'reactstrap'

class MainHome extends Component {

    constructor(){
        super();

        this.state = {

        }
    }




    render() {

        return(
            <React.Fragment>
                 <Slider />
        

          <div className="container-fluid">
            
         
                 
       


                
            
                <h2 class="maintitle">New Arrival is Here</h2>
                <h3 class="subtitle">The arrival that will change the way you think</h3>
            <Row >

           
           {/* products will render here */}
           
            <Col md="4" className="p-5">
            <Cardz title="Nike" subtitle="Shoes" text ="Men's Shoes. Nike
                Nike processes information about your visit using cookies to improve site performance" image={require('../images/product2.jpg')} />


                
            </Col>
            <Col md="4" className="p-5">
            <Cardz title="Nike" subtitle="Shoes" text ="Men's Shoes. Nike
                Nike processes information about your visit using cookies to improve site performance" image={require('../images/product2.jpg')} />


                
            </Col>
                 <Col md="4" className="p-5">
            <Cardz title="Nike" subtitle="Shoes" text ="Men's Shoes. Nike
                Nike processes information about your visit using cookies to improve site performance" image={require('../images/product2.jpg')} />
                
            </Col>
            <Col md="4" className="p-5">
            <Cardz title="Nike" subtitle="Shoes" text ="Men's Shoes. Nike
                Nike processes information about your visit using cookies to improve site performance" image={require('../images/product2.jpg')} />
                
            </Col>
          
          </Row>
            </div>

          
            </React.Fragment>
        )


    }

}


export default MainHome;