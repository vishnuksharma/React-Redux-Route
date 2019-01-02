import React from 'react';
import {Table, Button} from 'react-bootstrap';
import AttendanceTableRow from './AttendanceTableRow';

const AttendanceResultsTable = ({data, resetQueryForm}) => {

  const rows = data && data.map(attendee => {
    return <AttendanceTableRow key={attendee.ID} attendee={attendee}/>
  })

  return (
    <div>
    <Table striped bordered condensed hover>
      <thead>
        <tr>
          <th>Community Name</th>
          <th>Attendee Name</th>
          <th>Date/Time</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </Table>
    <Button type="submit" bsStyle="warning" onClick={resetQueryForm}>Search Again</Button>
    </div>
  )
}

export default AttendanceResultsTable;