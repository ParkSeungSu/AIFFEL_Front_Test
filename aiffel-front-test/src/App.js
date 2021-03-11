import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './component/Header';
import Nav from './component/Nav';
import Footer from './component/Footer';
import './App.css';
import Profile from './component/Profile';
import ForumPages from './pages/ForumPages';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Nav></Nav>
            <Footer></Footer>
          </Route>
          <Route path="/profile">
            <Header></Header>
            <Nav></Nav>
            <Profile></Profile>
            <Footer></Footer>
          </Route>
          <Route path="/forum">
            <Header></Header>
            <Nav></Nav>
            <ForumPages></ForumPages>
            <Footer></Footer>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
