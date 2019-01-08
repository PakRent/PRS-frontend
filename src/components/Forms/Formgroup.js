import React from 'react';
import './Formgroup.css';

 export default (props) => {
  return (

    <div className="form-group">
        <label className="label">
        {props.title}
        </label>
      <input
        className="form-control"
        id={props.name}
        name={props.name}
        type={props.inputtype}
        value={props.value}
        onChange={props.handlechange}
        placeholder={props.placeholder}
        {...props}
      />

    </div>
  )
}
