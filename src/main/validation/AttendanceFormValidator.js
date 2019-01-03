export const validateAttendanceForm = values => {
  const errors = {}
  if (values.name === undefined || values.name.trim().length <= 0) {
    errors.name = 'Required'
  } 
  if (values.communityName === undefined || values.communityName === 'Please Select') {
    errors.communityName = 'Required'
  }
  return errors;
}