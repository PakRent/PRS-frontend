import React from 'react';
import './Formgroup.css';

const Input = (props) => {

    let inputElement = null;

    switch (props.elementType) {
      case ('input'):
      inputElement = <input className="FormControl" {...props} value={props.value}/>;
      break;
      case ('email'):
      inputElement = <input className="EmailControl" {...props} value={props.value}/>;
      break;
      case('textarea'):
      inputElement = <textarea className="FormControl" {...props} value={props.value}/>;
      break;
      case('select'):
      inputElement = (
        <select className="custom-select" value={props.value}>

          {props.elementConfig.options.map(option =>(

            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    
      default:
      inputElement = <input  className="FormControl" {...props} value={props.value} />
    }
  return (

    <div className="FormGroup">
        <label className="Label">
        {props.label}
        </label>

        {inputElement}
      

    </div>
  )
}
export default Input;