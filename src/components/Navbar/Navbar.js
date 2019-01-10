import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-expand-lg">
      <div className="container"><Link to="/" className="navbar-brand"><img src={require('../../assets/images/Pak-logo.png')} alt="logo" width="180" className="img-fluid" /></Link>
        <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler navbar-toggler-right"><span></span><span></span><span></span></button>
        <div id="navbarSupportedContent" className="collapse navbar-collapse">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active"><Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link></li>
            <li className="nav-item"><Link to="about.html" className="nav-link">About</Link></li>
            <li className="nav-item"><Link to="property.html" className="nav-link">Property</Link></li>
            <li className="nav-item"><Link to="agents.html" className="nav-link">Agents</Link></li>
            <li className="nav-item"><Link to="gallery.html" className="nav-link">
                 
                Gallery       </Link></li>
            <li className="list-inline-item dropdown menu-large"><Link id="megamenu" to="#" data-toggle="dropdown" className="nav-link">Categories  <i className="fa fa-angle-down"></i></Link>
              <div aria-labelledby="megamenu" className="dropdown-menu megamenu">
                <div className="container">                       
                  <div className="row">
                    <div className="col-lg-3"><strong className="text-uppercase">Houses</strong>
                      <ul className="list-unstyled">
                        <li> <Link to="index.html">Buy</Link></li>
                        <li><Link to="about.html">Sell</Link></li>
                        <li><Link to="agents.html">Rent</Link></li>
                      </ul>
                    </div>
                    <div className="col-lg-3"><strong className="text-uppercase">Apartments</strong>
                      <ul className="list-unstyled">
                        <li><Link to="property.html">Buy </Link></li>
                        <li><Link to="property=single.html">Sell</Link></li>
                        <li><Link to="property-grid-full.html">Rent</Link></li>
                      </ul>
                    </div>
                    <div className="col-lg-3"><strong className="text-uppercase">Commercial</strong>
                      <ul className="list-unstyled">
                        <li><Link to="submit-property.html">Buy</Link></li>
                        <li><Link to="error-404.html">Sell</Link></li>
                        <li><Link to="gallery.html">Rent</Link></li>
                      </ul>
                    </div>
                    <div className="col-lg-3"><strong className="text-uppercase">Lands</strong>
                      <ul className="list-unstyled">
                        <li><Link to="#">Buy</Link></li>
                        <li><Link to="#">Sell</Link></li>
                        <li><Link to="#">Rent</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <ul className="secondary-nav-menu list-inline ml-auto mb-0">
            <li className="list-inline-item"><Link to="submit-property.html" className="btn btn-primary btn-gradient">Submit property</Link></li>
          </ul>
        </div>
        </div>
        </nav>
            
      </div>
    )
  }
}
