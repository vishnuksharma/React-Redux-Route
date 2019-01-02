import React from 'react';
import {Switch, Route} from 'react-router-dom';
import FeedbackContainer from './containers/FeedbackContainer';
import AttendanceContainer from './containers/AttendanceContainer';

const App = () => (
  <Switch>
    <Route exact path="/" component={FeedbackContainer}/>
    <Route path="/query-attendance" component={AttendanceContainer}/>
  </Switch>
)

export default App;
