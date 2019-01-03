import React from 'react';

const AttendanceTableRow = ({attendee}) => {
  
  const date = new Date(attendee.datetime);
  const formattedDate = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();

  return (
    <tr>
      <td>{attendee.communityName}</td>
      <td>{attendee.name}</td>
      <td>{formattedDate}</td>
    </tr>
  )
}

export default AttendanceTableRow;