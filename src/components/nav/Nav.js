import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Home from '../../pages/home/Home'
import Work from '../../pages/work/Work'
import About from '../../pages/about/About'
import Post from '../../pages/work/projects/Post'
import SinglePost from '../../pages/work/projects/SinglePost'

export default function Nav() {
    return (
        <Router>
            <header className='bg-red-100'>
                <div className='container mx-auto flex justify-between'>
                    <nav>
                        <Link to='/'>Home</Link>
                        <Link to='/my-work'>My work</Link>
                        <Link to='/about'>About me</Link>
                    </nav>
                </div>
            </header>
            <Switch>
                <Route path='/' exact component={Home}></Route>
                <Route path='/my-work' component={Work}></Route>
                <Route path='/post/:slug' component={SinglePost}></Route>
                <Route path='/post' component={Post}></Route>
                <Route path='/about' component={About}></Route>
            </Switch>
        </Router>
    )
}
