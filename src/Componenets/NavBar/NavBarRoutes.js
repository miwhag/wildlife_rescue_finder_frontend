import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ContactPage from '../Pages/ContactPage'
import NavBar from './NavBar'
import HomePage from '../Pages/HomePage'
import AboutPage from '../Pages/AboutPage'


export default function NavBarRoutes(){
  return (
    <Router>
      <NavBar/>
      <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/contact' component={ContactPage}/>
        <Route exact path='/about' component={AboutPage}/>
      </Switch>
      </div>
    </Router>
  );
}