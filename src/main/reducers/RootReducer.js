import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import feedbackReducer from './FeedbackReducer';
import attendanceReducer from './AttendanceReducer';

const RootReducer = combineReducers({
  feedbackReducer,
  attendanceReducer,
  form: formReducer
});

export default RootReducer;