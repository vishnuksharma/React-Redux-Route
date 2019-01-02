import React from 'react';

const AttendanceTableRow = ({attendee}) => (
  <tr>
    <td>{attendee.communityName}</td>
    <td>{attendee.name}</td>
    <td>{attendee.datetime}</td>
  </tr>
)

export default AttendanceTableRow;