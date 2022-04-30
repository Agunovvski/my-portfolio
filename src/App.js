import React from 'react'
import './App.less';
import './assets/templateStyles.css'

import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'

import { Switch, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Post from './pages/work/projects/Post'
import SinglePost from './pages/work/projects/SinglePost'
import Process from './pages/process/Process';
import NotFound from './pages/NotFound';
import Principles from './pages/principles/Principles';


function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/about' component={About}></Route>
        <Route path='/post/:slug' component={SinglePost}></Route>
        <Route path='/post' component={Post}></Route>
        <Route path='/design-process' component={Process}></Route>
        <Route path='/design-principles' component={Principles}></Route>
        <Route component={NotFound}></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
