import React,{Component} from 'react';
import {Route,Link,Switch,Redirect,BrowserRouter} from 'react-router-dom'

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
      <BrowserRouter>
      <div>
        <Navigation/>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path = "/about" component={About}/>
          <Route path = "/contact" component={Contact}/>
          <Route component={Error}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}
export default App;
