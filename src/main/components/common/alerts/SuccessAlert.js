import React from 'react';
import {Alert} from 'react-bootstrap';

const SuccessAlert = ({message}) => (
  <Alert bsStyle="success">
    <p>{message}</p>
  </Alert>
)

export default SuccessAlert;