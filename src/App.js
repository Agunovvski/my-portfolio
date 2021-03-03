import React from 'react'
import './assets/App.less';
import './assets/templateStyles.css'

import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'

import { Switch, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import Post from './pages/work/projects/Post'
import SinglePost from './pages/work/projects/SinglePost'
import NotFound from './pages/NotFound';


function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/post/:slug' component={SinglePost}></Route>
        <Route path='/post' component={Post}></Route>
        <Route component={NotFound}></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
