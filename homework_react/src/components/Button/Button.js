import React from 'react';
import './button.css'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.label}</button>
  )
}

export default Button;