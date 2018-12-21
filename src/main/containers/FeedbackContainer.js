import React, {Component} from 'react';
import { connect } from 'react-redux';
import {PageHeader, Row, Col} from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import FeedbackForm from '../components/form/AttendanceForm';
import * as feedbackActions from '../actions/FeedbackActions';
import SuccessAlert from '../components/common/alerts/SuccessAlert';

class FeedbackContainer extends Component {

  handleSubmit = values => {
    console.log(values)
    this.props.feedbackActions.submitFeedback(values);    
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
            {!submissionInProgress && submissionSuccess == null && <FeedbackForm onSubmit={this.handleSubmit}/> }
            {submissionInProgress && <p>Processing submission</p> }
            {!submissionInProgress && submissionSuccess && <SuccessAlert message='Submission successful'/> }
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