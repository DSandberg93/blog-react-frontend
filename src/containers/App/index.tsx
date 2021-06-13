import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from 'pages/Landing';
import TheVoid from 'pages/TheVoid';
import Navbar from 'components/Navbar';
import Posts from 'pages/Posts/index';
import Footer from 'components/Footer/index';

function App() {
  return (
    <div id="app">
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
      <Footer />
    </div>
  );
}

export default App;
