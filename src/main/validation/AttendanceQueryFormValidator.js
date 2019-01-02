export const validateAttendanceQueryForm = values => {
  const errors = {}
  if (values.communityName === undefined || values.communityName === 'Please Select') {
    errors.communityName = 'Required'
  }
  console.log(errors)
  return errors;
}