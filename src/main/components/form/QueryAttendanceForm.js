import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {FormGroup, ControlLabel, Button} from 'react-bootstrap';
import { renderDropdown, renderTextInput } from '../common/form/FormWrappers';
import { communities } from '../../data/FormData';
import { validateAttendanceQueryForm } from '../../validation/AttendanceQueryFormValidator';

const validate = values => {
  return validateAttendanceQueryForm(values)
}

let AttendanceForm = ({handleSubmit}) => (
  <form onSubmit={handleSubmit}>
    <FormGroup>
      <ControlLabel>
        Community 
      </ControlLabel>
      <Field
        name='communityName'
        placeholder='Please Select Community'
        inputName='communityName'
        options={communities}
        component={renderDropdown}        
      />
      <ControlLabel>
        Date 
      </ControlLabel>
      <Field
        name='datetime'
        type='text'
        placeholder='Enter date, e.g. 2018-01-01'
        inputName='datetime'
        component={renderTextInput}        
      />
    </FormGroup>
    <Button type="submit" bsStyle="primary">Submit</Button>
  </form>
)

AttendanceForm = reduxForm({
  form: 'attendanceForm',
  validate
})(AttendanceForm)

export default AttendanceForm;