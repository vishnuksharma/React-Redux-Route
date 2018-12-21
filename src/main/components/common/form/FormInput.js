import React from 'react';
import {FormGroup, FormControl} from 'react-bootstrap';

const FormInput = ({id, input, type, placeholder, meta}) => (
  
  <FormGroup validationState={meta.error && meta.touched ? "error" : null}>
    {meta.error && meta.touched && <p>Name is required</p>}
    <FormControl
      {...input}
      id={id}
      type={type}
      placeholder={placeholder}
    />
  </FormGroup>
);

export default FormInput;
