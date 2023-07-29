// App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Login from './Login';
import Profile from './Profile';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
