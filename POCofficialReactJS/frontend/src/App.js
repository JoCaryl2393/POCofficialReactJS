import React,{Component} from 'react';
import {Route,Link,Switch,Redirect,BrowserRouter} from 'react-router-dom'
import { Form, Button, FormGroup, FormControl, ControlLabel,Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import logo from './logo.svg';
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';

class App extends Component{
  render(){
    return(
      <div className="App">
        {/*<BrowserRouter>
          <Navigation/> */}
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link><Link to="/">Home</Link></Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item><Link to="/">Home</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/about">About</Link> </NavDropdown.Item>
                    <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Form inline>
                <FormControl name="Search" type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <div className="App-intro">
              <Route path="/" component={Home} exact/>
              <Route path = "/about" component={About}/>
              <Route path = "/contact" component={Contact}/>
              <Route component={Error}/>
            </div>
          </Switch>
        {/*</BrowserRouter>*/}
      </div>

    );
  }
}
export default App;
