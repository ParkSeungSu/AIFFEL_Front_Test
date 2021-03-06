import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './component/Header';
import Nav from './component/Nav';
import Footer from './component/Footer';
import './App.css';
import Profile from './component/Profile';
import ForumPages from './pages/ForumPages';
import ForumView from './pages/ForumView';
import WritePage from './pages/WritePage';
import LoginPage from './pages/LoginPage';

function App() {
  const [froumData, setFroumData] = useState({});

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <LoginPage></LoginPage>
            <Footer></Footer>
          </Route>
          <Route path="/profile">
            <Header></Header>
            <Nav></Nav>
            <Profile></Profile>
            <Footer></Footer>
          </Route>
          <Route path="/create">
            <Header></Header>
            <Nav></Nav>
            <WritePage></WritePage>
            <Footer></Footer>
          </Route>
          <Route path="/forum/:id">
            <Header></Header>
            <Nav></Nav>
            <ForumView data={froumData}></ForumView>
            <Footer></Footer>
          </Route>
          <Route path="/forum">
            {console.log(froumData)}
            <Header></Header>
            <Nav></Nav>
            <ForumPages setFroumData={setFroumData}></ForumPages>
            <Footer></Footer>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
