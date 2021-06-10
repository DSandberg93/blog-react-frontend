import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from 'pages/Landing';
import TheVoid from 'pages/TheVoid';
import Navbar from 'components/Navbar';
import Posts from 'pages/Posts/index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/posts">
            <Posts />
          </Route>
          <Route path="*">
            <TheVoid />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
