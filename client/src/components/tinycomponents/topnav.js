import React, { useState , useContext } from 'react';
import {NavLink as RRNavLink } from 'react-router-dom';
import NestedModal from './nestedmodal'
import {LoginContext} from  '../../logincontext';
import {CartContext} from '../../cartcontext';
import {SidebarContext} from '../../sidebarcontext';



import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button
} from 'reactstrap';


const Topnav = (props) => {


 

  















  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);






  return (
    <React.Fragment>
      <Navbar id="topnav" light expand="md" fixed dark={true}>
        <NavbarBrand className="m_text" href="/">ShoesWebsite</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar >


            <NavItem>
              <NavLink tag={RRNavLink} exact  to={"/"} activeClassName="active" className="m_text">New Arrivals</NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink tag={RRNavLink} exact  to={"/Women"} activeClassName="active" className="m_text">Women</NavLink>
            </NavItem>


            
            <NavItem>
              <NavLink tag={RRNavLink} exact  to={"/Men"} activeClassName="active" className="m_text">Men</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} exact  to={"/kids"} activeClassName="active" className="m_text">Kids</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} exact  to={"/fragrances"} activeClassName="active" className="m_text">Fragrances</NavLink>
            </NavItem>
            
           
          </Nav>

          <Nav >
         <LoginSucess />
        </Nav>

        </Collapse>

      
          
      </Navbar>
      </React.Fragment>
   )
  ;
}


function LoginSucess() {
  const [cart , setCart ] = useContext(CartContext);
  const [login , setLogin]= useContext(LoginContext);
  const [sidebar , setSidebar] = useContext(SidebarContext);

  function SetSidebarOpen(open) {
    setSidebar(prev => !prev)
}


  const loginSucess = login.loginSucess;

  if(loginSucess==false) {
  return(
    <NavItem>
    <NavLink tag={RRNavLink} exact  to={"/login"} activeClassName="active" className="m_text">Customer Login</NavLink>
    </NavItem>
  )
  }else {
    return(
    <React.Fragment>
    
     
    <NavItem>
    <NavLink tag={RRNavLink} exact  to={"/"} activeClassName="active" className="m_text mt-1">{login.userName}</NavLink>
    </NavItem>

    <NavItem className="">
    <Button onClick={() => SetSidebarOpen(true)}  className=" btn btn-bag btn-primary "><span className="fas fa-shopping-bag"></span> Shopping bag ({cart.totalCarted}) </Button>
    </NavItem>

    </React.Fragment>

    )
  }
}

export default Topnav;