import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Topbar from '../src/components/Topbar/Topbar';
import './App.css';
import CustomerLogin from './pages/Login/Customer-login';
import Register from './pages/Register/Register';
import Navbar from './components/Navbar/Navbar';

import Layout from './pages/Layout/Layout';

class App extends Component {
  state = {
    loading : true
  };

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 2500); // simulates loading of data
  }

  render() {
    const { loading } = this.state;
      if (loading) {
        return null;
      }
    return (
      <BrowserRouter>
      <div className="App">
        

            <Topbar />
            <Navbar />
            <Route exact path="/" component={Layout} />
            <Route exact path="/login" component={CustomerLogin}/>
            <Route exact path="/register" component={Register}/>
        
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
