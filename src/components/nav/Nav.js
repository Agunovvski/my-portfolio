import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Home from '../../pages/home/Home'
import Work from '../../pages/work/Work'

export default function Nav() {
    return (
        <Router>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='my-work'>My work</Link>
            </nav>
            <Switch>
                <Route path='/' exact component={Home}></Route>
                <Route path='my-work' component={Work}></Route>
            </Switch>
        </Router>
    )
}
