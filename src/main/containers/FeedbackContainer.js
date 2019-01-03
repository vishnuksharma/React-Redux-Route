import React, {Component} from 'react';
import { connect } from 'react-redux';
import {PageHeader, Row, Col,Button} from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import FeedbackForm from '../components/form/AttendanceForm';
import * as feedbackActions from '../actions/FeedbackActions';
import SuccessAlert from '../components/common/alerts/SuccessAlert';

class FeedbackContainer extends Component {

  handleSubmit = values => {
    this.props.feedbackActions.submitFeedback(values);    
  } 

  resetAttendanceForm = () => {
    this.props.feedbackActions.resetAttendanceForm();    
  }

  render() {

    const {submissionInProgress, submissionSuccess} = this.props;

    return (
      <div>
        <PageHeader>
          Attendance Form
        </PageHeader> 
        <Row>
          <Col xs={6} s={6} md={6} lg={6}>
            {!submissionInProgress && !submissionSuccess && <FeedbackForm onSubmit={this.handleSubmit}/> }
            {submissionInProgress && <p>Processing submission</p> }
            {!submissionInProgress && submissionSuccess && 
              <div>
                <SuccessAlert message='Submission successful'/><br/>
                <Button type="submit" bsStyle="warning" onClick={this.resetAttendanceForm}>Reset Form</Button>
              </div>
            }            
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(
  state => ({
    submissionInProgress: state.feedbackReducer.submissionInProgress,
    submissionSuccess: state.feedbackReducer.submissionSuccess
  }),
  dispatch => ({
    feedbackActions: bindActionCreators(feedbackActions, dispatch)
  })
)(FeedbackContainer);