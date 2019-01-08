import React, { Component } from 'react';
import Button from '../../components/Button/Button';
import Breadcrumb from '../../components/Breadnav/Breadcrumb';
import Input from '../../components/Forms/Formgroup';
import './Customer-login.css';

export default class CustomerLogin extends Component {
  render() {
    return (
      <div>
        <section className="hero-page bg-black-3">
            <div className="container">
              <h1 className="h2">Login / Create Account</h1>
                <Breadcrumb
                  item={"Home"}
                  current={"User Login"}
                /> 
            </div>
        </section>
        <section className="customer-login bg-black-2">
          <div className="container text-left">
            <div className="row">
              <div className="col-lg-6">
                <h2 className="has-line">Login</h2>
                <h4 className="text-thin">Already our user?</h4>
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                <hr />
                <form action="#" className="login-form">
                    <Input
                    inputType={"email"}
                    title={"Email *"}
                    name={"email"}
                    placeholder={"Type Your Email Address"}
                    handleChange={this.handleInput}
                  />{" "}
                  <Input
                    inputType={"password"}
                    title={"Password *"}
                    name={"password"}
                    placeholder={"Password"}
                    handleChange={this.handleInput}
                  />{" "}
                  <div className="form-group">
                  <Button type={'submit'} className={"btn btn-gradient"} title={"Login"}/>
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
                    <input type="password" name="password" placeholder="Password" className="form-control" />
                  </div>
                  <div className="form-group">
                    <Button type={'submit'} className={"btn btn-gradient"} title={"Register"}/> 
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
