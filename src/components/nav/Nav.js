import React from 'react'
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import Logo from '../../assets/images/logo'
import { Button } from 'antd'
import './NavStyles.css'
import '../../assets/templateStyles.css'

export default function Nav() {

    return (
        <header>
            <nav className='navigation template-width'>
                <NavLink to='/'>
                    <Logo />
                </NavLink>
                <div>
                    {/* <Button type='link'>
                        <NavLink to='/my-work'>My work</NavLink>
                    </Button> */}
                    <Button size='middle' type='link'>
                        <HashLink smooth to='/#about'>About me</HashLink>
                    </Button>
                    <Button size='middle' type='primary'>
                        <NavLink to='/post'>My work</NavLink>
                    </Button>
                </div>
            </nav>
        </header>
    )
}
