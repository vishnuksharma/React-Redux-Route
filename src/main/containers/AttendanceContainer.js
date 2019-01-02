import React, {Component} from 'react';
import { connect } from 'react-redux';
import {PageHeader, Row, Col} from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import AttendanceQueryForm from '../components/form/QueryAttendanceForm';
import * as attendanceActions from '../actions/AttendanceActions';
import AttendanceResultsTable from '../components/attendanceQuery/AttendanceResultsTable';

class AttendanceContainer extends Component {

  handleSubmit = values => {
    this.props.attendanceActions.submitAttendanceQuery(values.communityName);  
  } 

  resetQueryForm = event => {
    event.preventDefault();
    this.props.attendanceActions.resetQueryForm();
  }

  render() {

    const {searchInProgress, searchResponse} = this.props;
  
    return (
      <div>
        <PageHeader>
          Query Attendance
        </PageHeader> 
        <Row>
          <Col xs={6} s={6} md={6} lg={6}>
            {!searchInProgress && searchResponse == null && <AttendanceQueryForm onSubmit={this.handleSubmit}/> }
            {!searchInProgress && searchResponse && <AttendanceResultsTable data={searchResponse} resetQueryForm={this.resetQueryForm}/> }
            {searchInProgress && <p>Searching...</p> }
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(
  state => ({
    searchInProgress: state.attendanceReducer.searchInProgress,
    searchResponse: state.attendanceReducer.searchResponse
  }),
  dispatch => ({
    attendanceActions: bindActionCreators(attendanceActions, dispatch)
  })
)(AttendanceContainer);