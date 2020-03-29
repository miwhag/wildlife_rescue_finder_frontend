import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ContactPage from '../Pages/ContactPage'
import NavBar from './NavBar'
import HomePage from '../Pages/HomePage'
import AboutPage from '../Pages/AboutPage'
import MapPage from '../Pages/MapPage'
import RescuePage from '../Pages/RescuePage'


export default function NavBarRoutes(){
  return (
    <Router>
      <NavBar/>
      <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/about' component={AboutPage}/>
        <Route exact path='/contact' component={ContactPage}/>
        <Route exact path='/rescue_centers' component={RescuePage}/>
        <Route exact path='/bushfire_map' component={MapPage}/>

      </Switch>
      </div>
    </Router>
  );
}