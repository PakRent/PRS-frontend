import React from "react";
import { Link } from 'react-router-dom';
import './Breadcrumb.css';

const Breadcrumb = (props) =>{
    return (
        <nav ariaLabel="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><i className="fas fa-home"></i><Link to="/">{props.item}</Link></li>
                <li ariaCurrent="page" className="breadcrumb-item active">{props.current}</li>
            </ol>
        </nav>
    )
}

export default Breadcrumb;