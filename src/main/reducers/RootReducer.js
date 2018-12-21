import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import feedbackReducer from './FeedbackReducer'

const RootReducer = combineReducers({
  feedbackReducer,
  form: formReducer
});

export default RootReducer;