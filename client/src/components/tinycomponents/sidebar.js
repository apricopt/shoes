import React , {useState , useContext} from 'react';
import Sidebar from "react-sidebar";
import {CartContext} from '../../cartcontext';
import { SidebarContext } from '../../sidebarcontext';




function SidebarBag() {


    const [cart , setCart] = useContext(CartContext);
    const [sidebar , setSidebar ] = useContext(SidebarContext);

   

  



    // function SetSidebarOpen(open) {
    //     setSidebar(open)
    // }


        return(

            <Sidebar
        sidebar={
          <div id="sidebar">
             <button onClick={() => setSidebar(false)} className=" btn btn-bag btn-primary "><span className="fas fa-shopping-bag"></span> Back to the Market</button>
            <hr />
            <h1>Your Shopping Bag</h1>
            
          </div>
        }
        pullRight={true}
        open={sidebar}
        styles={{ sidebar: { background: "white" } }}
      >
         {/* <button className="mt-5 py-5" onClick={() => SetSidebarOpen(true)}>
          Open sidebar
        </button>  */}
      </Sidebar>




        )


















}






export default SidebarBag;