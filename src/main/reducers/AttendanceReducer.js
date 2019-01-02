import { QUERYING_ATTENDANCE, QUERY_ATTENDANCE_FAILURE, QUERY_ATTENDANCE_SUCCESS, RESET_QUERY_FORM } from "../actions/ActionTypes";

const initialState = {
  searchInProgress: false,
  searchResponse: null
}

const attendanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case QUERYING_ATTENDANCE:
      return {
        ...state,
        searchInProgress: action.searchInProgress
      }
    case QUERY_ATTENDANCE_SUCCESS:
    case QUERY_ATTENDANCE_FAILURE:
      return {
        ...state,
        searchInProgress: action.searchInProgress,
        searchResponse: action.searchResponse
      }
    case RESET_QUERY_FORM:
      return {
        ...state,
        searchResponse: action.searchResponse
      }
    default:
      return state;
  }
}

export default attendanceReducer;