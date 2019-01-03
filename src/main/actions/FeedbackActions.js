import { SUBMIT_FEEDBACK, SUBMIT_FEEDBACK_SUCCESS, SUBMIT_FEEDBACK_FAILURE, RESET_ATTENDANCE_FORM } from "./ActionTypes";
import { processFeedbackSubmission } from "../api/FeedbackApi";

const submittingFeedback = () => {
  return {
    type: SUBMIT_FEEDBACK,
    submissionInProgress: true
  }
}

const submitFeedbackSuccess = () => {
  return {
    type: SUBMIT_FEEDBACK_SUCCESS,
    submissionInProgress: false,
    submissionSuccess: true
  }
}

const submittingFeedbackFailure = () => {
  return {
    type: SUBMIT_FEEDBACK_FAILURE,
    submissionInProgress: false,
    submissionSuccess: false
  }
}

export const submitFeedback = (data) => {
  return dispatch => {
    dispatch(submittingFeedback());

    processFeedbackSubmission(data, response => {
      if(response.status === 200) {
        dispatch(submitFeedbackSuccess());
      } else {
        dispatch(submittingFeedbackFailure());
      }
    })
  }
}

export const resetAttendanceForm = () => {
  return {
    type: RESET_ATTENDANCE_FORM,
    submissionSuccess: false
  }
}