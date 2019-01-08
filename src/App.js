import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Topbar from '../src/components/Topbar/Topbar';
import './App.css';
import CustomerLogin from './pages/Login/Customer-login';
import Register from './pages/Register/Register';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        

            <Topbar />
            <Route exact path="/login" component={CustomerLogin}/>
            <Route exact path="/register" component={Register}/>
        
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
