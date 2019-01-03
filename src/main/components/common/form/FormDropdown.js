import React from 'react';
import {FormGroup, FormControl} from 'react-bootstrap';

const FormDropdown = ({id, input, placeholder, options, meta}) => (
  <FormGroup validationState={meta.error && meta.touched ? "error" : null}>
    {meta.error && meta.touched && <p>{meta.error}</p>}
    <FormControl 
      {...input}  
      componentClass="select" 
      id={id}    
      placeholder={placeholder}
    >
      {options}
    </FormControl>
  </FormGroup>
);

export default FormDropdown;
