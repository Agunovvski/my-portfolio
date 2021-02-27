import React from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import { Button } from 'antd'
import './NavStyles.css'
import '../../assets/templateStyles.css'

import Home from '../../pages/home/Home'
import Work from '../../pages/work/Work'
import About from '../../pages/about/About'

export default function Nav() {



    return (
        <Router>
            <header>
                <nav className='navigation template-width'>
                    <NavLink to='/'>Home</NavLink>
                    <div>
                        <Button type='link'>
                            <NavLink to='/my-work'>My work</NavLink>
                        </Button>
                        <Button type='link'>
                            <NavLink to='/about'>About me</NavLink>
                        </Button>
                    </div>
                </nav>
            </header>
            <Switch>
                <Route path='/' exact component={Home}></Route>
                <Route path='/my-work' component={Work}></Route>
                <Route path='/about' component={About}></Route>
            </Switch>
        </Router>
    )
}
