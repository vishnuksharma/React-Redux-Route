import { QUERYING_ATTENDANCE, QUERY_ATTENDANCE_SUCCESS, QUERY_ATTENDANCE_FAILURE, RESET_QUERY_FORM } from "./ActionTypes";
import { queryAttendanceByCommunityName } from "../api/FeedbackApi";

const queryingAttendance = () => {
  return {
    type: QUERYING_ATTENDANCE,
    searchInProgress: true
  }
}

const queryAttendanceSuccess = searchResponse => {
  return {
    type: QUERY_ATTENDANCE_SUCCESS,
    searchInProgress: false,
    searchResponse
  }
}

const queryAttendanceFailure = () => {
  return {
    type: QUERY_ATTENDANCE_FAILURE,
    searchInProgress: false,
    searchResponse: null
  }
}

export const submitAttendanceQuery = (communityName) => {
  return dispatch => {
    dispatch(queryingAttendance());

    queryAttendanceByCommunityName(communityName, response => {
      if(response) {
        dispatch(queryAttendanceSuccess(response));
      } else {
        dispatch(queryAttendanceFailure());
      }
    })
  }
}

export const resetQueryForm = () => {
  return {
    type: RESET_QUERY_FORM,
    searchResponse: null
  }
}