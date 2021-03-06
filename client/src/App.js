import React from 'react';
import './App.css';
import NavBar from './components/Navbar'
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './components/screens/Home'
import Signin from './components/screens/SignIn'
import Profile from './components/screens/Profile'
import Signup from './components/screens/signup'
import CreatePost from './components/screens/CreatePost'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Route path="/" exact ><Home/></Route>
      <Route path="/signin"><Signin/></Route>
      <Route path="/profile"><Profile/></Route>
      <Route path="/signup"><Signup/></Route>
      <Route path="/create"><CreatePost/></Route>
    </BrowserRouter>
  );
}

export default App;
