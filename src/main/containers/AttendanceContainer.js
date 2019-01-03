import React, {Component} from 'react';
import { connect } from 'react-redux';
import {PageHeader, Row, Col, Button} from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import AttendanceQueryForm from '../components/form/QueryAttendanceForm';
import * as attendanceActions from '../actions/AttendanceActions';
import AttendanceResultsTable from '../components/attendanceQuery/AttendanceResultsTable';

class AttendanceContainer extends Component {

  handleSubmit = values => {
    this.props.attendanceActions.submitAttendanceQuery(values);  
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
            {!searchInProgress && searchResponse && searchResponse.length !== 0 &&
               <AttendanceResultsTable data={searchResponse} resetQueryForm={this.resetQueryForm}/> 
            }
            {searchInProgress && <p>Searching...</p> }
            {!searchInProgress && searchResponse && searchResponse.length === 0 && 
              <div>
                <h2>No results</h2><br/>
                <Button type="submit" bsStyle="warning" onClick={this.resetQueryForm}>Search Again</Button>
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
    searchInProgress: state.attendanceReducer.searchInProgress,
    searchResponse: state.attendanceReducer.searchResponse
  }),
  dispatch => ({
    attendanceActions: bindActionCreators(attendanceActions, dispatch)
  })
)(AttendanceContainer);