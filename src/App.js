import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import {Route, BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Route path='/' component={Home}></Route>
      
    </div>
    </Router>
  );
}

export default App;
