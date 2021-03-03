import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'antd'
import './NavStyles.css'
import '../../assets/templateStyles.css'

export default function Nav() {

    return (
        <header>
            <nav className='navigation template-width'>
                <NavLink to='/'>Home</NavLink>
                <div>
                    <Button type='link'>
                        <NavLink to='/post'>My work</NavLink>
                    </Button>
                </div>
            </nav>
        </header>
    )
}
