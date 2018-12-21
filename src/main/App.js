import React from 'react';
import {Switch, Route} from 'react-router-dom';
import FeedbackContainer from './containers/FeedbackContainer';

const App = () => (
  <Switch>
    <Route exact path="/" component={FeedbackContainer}/>
  </Switch>
)

export default App;
