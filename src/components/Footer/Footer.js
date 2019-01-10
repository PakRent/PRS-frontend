import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer bg-black-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 brief">
                        <div className="logo"><img src={require('../../assets/images/Pak-logo.png')} alt="Logo"/></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p>
                        <ul className="social list-inline">
                            <li className="list-inline-item"><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                            <li className="list-inline-item"><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                            <li className="list-inline-item"><Link to="#"><i className="fab fa-linkedin"></i></Link></li>
                            <li className="list-inline-item"><Link to="#"><i className="fab fa-pinterest"></i></Link></li>
                            <li className="list-inline-item"><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 links">
                        <h3 className="h4 text-thin text-uppercase">Company</h3>
                        <ul className="list-unstyled">
                            <li><Link to="#">Properties</Link></li>
                            <li><Link to="#">Landlords</Link></li>
                            <li><Link to="#">Renters</Link></li>
                            <li><Link to="#">Services</Link></li>
                            <li><Link to="#">Pricing</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 links">
                        <h3 className="h4 text-thin text-uppercase">Support</h3>
                        <ul className="list-unstyled">
                            <li><Link to="#">Help & FAQ</Link></li>
                            <li><Link to="#">Policy Privacy</Link></li>
                            <li><Link to="#">Contact Us</Link></li>
                            <li><Link to="#">Careers</Link></li>
                            <li><Link to="#">Our Partners</Link></li>
                        </ul>
                    </div>
                    {/*
                    <div className="col-lg-4 newsletter">
                        <h3 className="h4 text-thin text-uppercase">Newsletter</h3>
                        <p>Sign Up For Newsletter.</p>
                        <form className="newsletter-form">
                            <Input
                                inputtype={"email"}
                                name={"email-n"}
                                placeholder={"Ex. david@gmail.com"}
                                handlechange={this.handleInput}
                            /> 
                            <Button type={'submit'} className={"btn btn-gradient submit"} title={"Send"}/>
                        </form>
                    </div>
                    */}
                    <div class="col-lg-4 newsletter">
                    <h3 class="h4 text-thin text-uppercase">Newsletter</h3>
                    <p>p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                    <form class="newsletter-form">
                    <div class="form-group">
                        <input type="email" name="email" placeholder="Enter your email address" class="form-control" />
                        <button type="submit" class="btn btn-gradient submit"><i class="far fa-paper-plane"></i></button>
                    </div>
                    </form>
                </div>
                        </div>
                    </div>

            <div className="copyrights bg-black-6">
                <div className="container text-center">
                    <p>&copy; 2019 Pak Houses</p>
                </div>
            </div>
        </footer>
      </div>
    )
  }
}
