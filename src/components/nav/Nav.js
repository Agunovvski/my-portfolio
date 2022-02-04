import React from 'react'
import { NavLink } from 'react-router-dom'
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
                    <Button type='link'>
                        <NavLink to='/post'>My work</NavLink>
                    </Button>
                    <Button type='link'>
                        <NavLink to='/about'>About me</NavLink>
                    </Button>
                </div>
            </nav>
        </header>
    )
}
