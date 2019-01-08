import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Topbar.css';
import CustomerLogin from '../../pages/Login/Customer-login';


class Topbar extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.state ={
            showMe : false,
        }
    }
    handleClick (){
        this.setState({ showMe : true});
    }
    handleClick2 (){
        this.setState({ showMe: false });
    }
  render() {
    return (
    <div className="header">

        <div className="top-bar">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-none d-lg-block menu-left">
                        <ul className="list-inline">
                            <li className="list-inline-item"><Link to="#">Blog</Link></li>
                            <li className="list-inline-item"><Link to="#">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-6 text-right menu-right">
                        <ul className="list-inline">
                            <li className="list-inline-item" onClick={this.handleClick}><Link to="#" className="search-btn"><i className="fas fa-search"></i></Link></li>
                            <li className="list-inline-item"><Link to="#"><i className="fa fa-heart-o"></i>Favourites</Link></li>
                            <li className="list-inline-item"><Link to="/login" className="pr-0 border-right-0"><i className="far fa-user"></i>Login</Link></li>
                        </ul>
                    </div>
                    {this.state.showMe?
                    <div className="search-area">
                        <div className="search-inner d-flex align-items-center justify-content-center">
                            <div className="close-btn" onClick={this.handleClick2}>Close<i className="fas fa-times"></i></div>
                            <form className="search-form">
                                <div className="form-group">
                                    <input type="search" placeholder="what are you searching for ..?" />
                                    <button type="submit" className="submit">Search</button> 
                                </div>
                            </form>
                        </div>
                    </div>
                    :null
                    }
                </div>
            </div>
        </div>
        
    </div>
    )
  }
}
export default Topbar;