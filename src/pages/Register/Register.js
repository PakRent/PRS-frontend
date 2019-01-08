import React, { Component } from 'react';
import Button from '../../components/Button/Button';
import Breadcrumb from '../../components/Breadnav/Breadcrumb';
import Input from '../../components/Forms/Formgroup';
import './Register.css';

export default class Register extends Component {
  render() {
    return (
      <div>
        <section className="hero-page bg-black-3">
            <div className="container">
              <h1 className="h2">Create Account</h1>
                <Breadcrumb
                  item={"Home"}
                  current={"User Register"}
                /> 
            </div>
        </section>
        <section className="customer-login bg-black-2">
          <div className="container text-left">
            <div className="row justify-content-md-center">
              <div className="col-md-6">
                <h2 className="has-line text-left">New Account</h2>
                <h4 className="text-thin text-left">Not our registered user yet?</h4>
                <p>You also understand that Pak Houses may send marketing emails about Pak Houses products, services, and local events. You can unsubscribe at any time.</p>
                <hr />
                <form action="#" className="login-form text-left">
                  <Input 
                    inputType={"text"}
                    title={"Full Name *"}
                    name={"name"}
                    placeholder={"Jhon Doe"}
                    handleChange={this.handleInput}
                    />{" "}

                    <Input 
                    inputType={"email"}
                    title={"Email *"}
                    name={"email"}
                    placeholder={"Ex. jhon@gamil.com"}
                    handleChange={this.handleInput}
                    />{" "}
                
                    <Input 
                    inputType={"password"}
                    title={"Password *"}
                    name={"Password"}
                    placeholder={"Choose Your Password"}
                    handleChange={this.handleInput}
                    />{" "}
                  
             
                    <Button type={'submit'} className={"btn btn-gradient"} title={"Register"}/> 
            
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
