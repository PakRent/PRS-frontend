import React, { Component } from 'react';
import Button from '../../components/Button/Button';
import Breadcrumb from '../../components/Breadnav/Breadcrumb';
import Input from '../../components/Forms/Formgroup';
import './Customer-login.css';
import Footer from '../../components/Footer/Footer';

export default class CustomerLogin extends Component {
  render() {
    return (
      <div>
        <section className="hero-page bg-black-3">
            <div className="container">
              <h1 className="h2">Login</h1>
                <Breadcrumb
                  item={"Home"}
                  current={"User Login"}
                /> 
            </div>
        </section>
        <section className="customer-login bg-black-2">
          <div className="container text-center">
            <div className="row justify-content-md-center">
              <div className="col-md-6">
                <h2 className="has-line text-left">Login</h2>
                <h4 className="text-thin text-left">Already our user?</h4>
                <p className="text-left">Continue With Your Email and Password.</p>
                <hr />
                <form action="#" className="login-form text-left">
                    <Input
                    inputtype={"email"}
                    title={"Email *"}
                    name={"email"}
                    placeholder={"Ex. jhon@gamil.com"}
                    handlechange={this.handleInput}
                  />{" "}
                  <Input
                    inputtype={"password"}
                    title={"Password *"}
                    name={"password"}
                    placeholder={"Your Password"}
                    handlechange={this.handleInput}
                  />{" "}
                  
                  <Button type={'submit'} className={"btn btn-gradient"} title={"Login"}/>
            
                </form>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    )
  }
}
