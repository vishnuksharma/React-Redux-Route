import { SUBMIT_FEEDBACK, SUBMIT_FEEDBACK_SUCCESS, SUBMIT_FEEDBACK_FAILURE } from "./ActionTypes";
import { processFeedbackSubmission, doTest } from "../api/FeedbackApi";

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
      console.log(response)
      if(response.status === 200) {
        dispatch(submitFeedbackSuccess());
      } else {
        dispatch(submittingFeedbackFailure());
      }
    })
  }
}