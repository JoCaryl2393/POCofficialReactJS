import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import { Form, Button, FormGroup, FormControl, ControlLabel,Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


const Navigation =()=>{
    return(
            <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
    );
}

export default Navigation;