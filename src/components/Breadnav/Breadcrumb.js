import React from "react";
import { Link } from 'react-router-dom';
import './Breadcrumb.css';

const Breadcrumb = () =>{
    return (
        <nav ariaLabel="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><i className="fas fa-home"></i><Link to="/">Home</Link></li>
                <li ariaCurrent="page" className="breadcrumb-item active">User Login</li>
            </ol>
        </nav>
    )
}

export default Breadcrumb;