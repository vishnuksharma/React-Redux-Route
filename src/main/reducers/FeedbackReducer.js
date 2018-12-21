import { SUBMIT_FEEDBACK, SUBMIT_FEEDBACK_SUCCESS, SUBMIT_FEEDBACK_FAILURE } from "../actions/ActionTypes";

const initialState = {
  submissionInProgress: false,
  submissionSuccess: null
}

const feedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_FEEDBACK:
      return {
        ...state,
        submissionInProgress: action.submissionInProgress
      }
    case SUBMIT_FEEDBACK_SUCCESS:
    case SUBMIT_FEEDBACK_FAILURE:
      return {
        ...state,
        submissionInProgress: action.submissionInProgress,
        submissionSuccess: action.submissionSuccess
      }
    default:
      return state;
  }
}

export default feedbackReducer;