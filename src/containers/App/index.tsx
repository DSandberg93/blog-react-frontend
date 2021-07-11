import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from 'pages/Landing';
import TheVoid from 'pages/TheVoid';
import Navbar from 'components/Navbar';
import Posts from 'pages/Posts';
// import Footer from 'components/Footer';
import ManagePost from 'pages/ManagePost';
import Post from 'pages/Post';

import { AppContainer } from './styled';

function App() {
  return (
    <AppContainer>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Landing />
            {/* <Footer /> */}
          </Route>
          <Route exact path="/posts">
            <Posts />
            {/* <Footer /> */}
          </Route>
          <Route exact path="/posts/create">
            <ManagePost />
          </Route>
          <Route exact path="/posts">
            <Post />
            {/* <Footer /> */}
          </Route>
          <Route exact path="/:post">
            <ManagePost edit />
          </Route>
          <Route path="*">
            <TheVoid />
          </Route>
        </Switch>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
