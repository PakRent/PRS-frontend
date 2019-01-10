import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Carousel.css';

export default class Carousel extends Component {
  render() {
    return (

        <div>
            <div className="carousel slide carousel-fade" id="carouselIndicators" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" style={{height: '80vh'}} src={require("../../assets/images/listing-bg-2.jpeg")} alt="First slide" />
                        <div class="carousel-caption container text-left">
                            <div class="row">
                            <div class="col-lg-8">
                                <h1>Voluptatem accusantium doloremque</h1>
                                <p class="template-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p><Link to="#" className="btn btn-gradient">Learn More</Link>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" style={{height: '80vh'}} src={require("../../assets/images/hero-bg-2.jpeg")} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" style={{height: '80vh'}} src={require("../../assets/images/hero-bg-3.jpeg")} alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        
        </div>
    )
  }
}