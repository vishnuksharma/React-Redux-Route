export const validateAttendanceQueryForm = values => {
  const errors = {}
  if ((values.communityName === undefined || values.communityName === 'Please Select')
    && (values.datetime === undefined || values.datetime.trim() === '')) {
    errors.communityName = 'Must provide either communityName or date to query on'
    errors.datetime = 'Must provide either communityName or date to query on'
  }
  let dateRegex =  /\d{4}-\d{2}-\d{2}/

  if(values.datetime !== undefined && !dateRegex.test(values.datetime)) {
    errors.datetime = 'Date must be in the format: YYYY-MM-DD, e.g. 2018-01-01'
  }
  return errors;
}