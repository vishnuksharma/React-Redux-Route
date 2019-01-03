export const processFeedbackSubmission = (data, callback) => {

  const url = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEV_API_URL : process.env.REACT_APP_PROD_API_URL;

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(callback)
}

export const queryAttendanceByCommunityName = (query, callback) => {
  let url =  `${process.env.REACT_APP_PROD_QUERY_API}`;

  if(query.communityName && query.datetime) {
    url += `?communityName=${query.communityName}&datetime=${query.datetime}`;
  } else if(query.communityName) {
    url += `?communityName=${query.communityName}`;
  } else if(query.datetime) {
    url += `?datetime=${query.datetime}`;
  }

  fetch(url)
    .then(res => {
      if(res.status === 200) {
        return res.json();
      }
    })
    .then(callback)
}