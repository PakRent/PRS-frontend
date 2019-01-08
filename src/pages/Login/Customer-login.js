import React, { Component } from 'react';
import './Customer-login.css';

export default class CustomerLogin extends Component {
  render() {
    return (
      <div>
        <section className="hero-page bg-black-3">
            <div className="container">
            <h1 className="h2">User Area</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li aria-current="page" className="breadcrumb-item active">User Login</li>
                    </ol>
                </nav>
            </div>
        </section>
        <section className="customer-login bg-black-2">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h2 className="has-line">Login</h2>
                <h4 className="text-thin">Already our user?</h4>
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                <hr />
                <form action="#" className="login-form">
                  <div className="form-group">
                    <input type="email" name="email" placeholder="Type your email address" className="form-control" />
                  </div>
                  <div className="form-group">
                    <input type="password" name="paddword" placeholder="Password" className="form-control" />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-gradient">Login</button>
                  </div>
                </form>
              </div>
              <div className="col-lg-6 mt-5 mt-lg-0">
                <h2 className="has-line">New Account</h2>
                <h4 className="text-thin">Not our registered user yet?</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. LOLUt enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <hr />
                <form action="#" className="login-form">
                  <div className="form-group">
                    <input type="text" name="name" placeholder="Type your full name" className="form-control" />
                  </div>
                  <div className="form-group">
                    <input type="email" name="email" placeholder="Type your email address" className="form-control" />
                  </div>
                  <div className="form-group">
                    <input type="password" name="paddword" placeholder="Password" className="form-control" />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-gradient">Register</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
