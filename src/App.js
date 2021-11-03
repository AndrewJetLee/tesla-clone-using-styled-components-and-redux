import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import ModelS from './components/ModelS'

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/ModelS' component={ModelS}></Route>
    </div>
    </Router>
  );
}

export default App;
