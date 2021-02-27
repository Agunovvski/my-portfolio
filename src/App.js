import React from 'react'
import './assets/App.less';
import './assets/templateStyles.css'

import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import Work from './pages/work/Work'
import About from './pages/about/About'
import Post from './pages/work/projects/Post'
import SinglePost from './pages/work/projects/SinglePost'
import Project from './pages/work/projects/Project'


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/my-work' component={Project}></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/post' component={Post}></Route>
          <Route path='/post/:slug' component={SinglePost}></Route>
          {/* <Route path='/project' component={Project}></Route> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
