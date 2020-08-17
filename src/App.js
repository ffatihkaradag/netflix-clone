import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Home from './Home/Home'
import Banner from './Banner/Banner'
import Nav from './Nav/Nav'
import Login from './Login/Login'
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Nav />
            <Banner />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
