import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {FormGroup, ControlLabel, Button} from 'react-bootstrap';
import { renderTextInput, renderDropdown } from '../common/form/FormWrappers';
import { communities } from '../../data/FormData';
import { validateAttendanceForm } from '../../validation/AttendanceFormValidator';

const validate = values => {
  return validateAttendanceForm(values)
}

let FeedbackForm = ({handleSubmit}) => (
  <form onSubmit={handleSubmit}>
    <FormGroup>
      <ControlLabel>
        Attendee Name
      </ControlLabel>
      <Field
        name='name'
        type='text'
        placeholder='Enter name'
        inputName='name'
        component={renderTextInput}        
      />
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
    </FormGroup>
    <Button type="submit" bsStyle="primary">Submit</Button>
  </form>
)

FeedbackForm = reduxForm({
  form: 'feedbackForm',
  validate
})(FeedbackForm)

export default FeedbackForm;