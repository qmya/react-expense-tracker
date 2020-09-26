import React from 'react';
import "./Navigation.scss";
import { NavLink } from 'react-router-dom';
// import Logo from '../../assets/logo/logo-instock.svg';

function Navigation () {
    
return ( 
    <header>
        <div className="navigation">
            <div className ="navigation__logo">
            {/* <NavLink to="/">
            <img  src ={Logo} alt="logo of the site"/>
            </NavLink> */}
            </div>
            <nav className="navigation__container ">
                <NavLink to= "/Account" className="navigation__account" activeClassName="navigation__account--selected" >
                <h1>Account</h1>
                </NavLink>
                <NavLink to= "/category"  className="navigation__category" activeClassName="navigation__category--selected">
                    <h1>Category</h1>
                </NavLink>
                <NavLink to= "/expense"  className="navigation__expense" activeClassName="navigation__expense--selected">
                    <h1>Expense</h1>
                </NavLink>
            </nav>
        </div>
    </header>
    
 );
}
  export default Navigation;