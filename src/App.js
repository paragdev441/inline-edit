import React from 'react';
import { Route, Router } from 'react-router-dom';
import Navigation from './containers/Navigation';
import SelectInPlace from './containers/SelectInPlace';
import TextInPlace from './containers/TextInPlace';
import Welcome from './containers/Welcome';
import History from './History';
import './styles.css';

const App = () => {
  return (
    <div>
      <Router history={History}>
        <Navigation />
        <Route exact path="/" component={Welcome} />
        <Route path="/text-in-place" component={TextInPlace} />
        <Route path="/select-in-place" component={SelectInPlace} />
      </Router>
    </div>
  );
};

export default App;
