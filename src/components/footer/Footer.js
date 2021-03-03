import React from 'react'
import './FooterStyles.css'
import '../../assets/templateStyles.css'

import { Divider } from 'antd'

export default function Footer() {
    return (
        <section className='footer-section'>
            <footer className='template-width'>
                <Divider />
                <p>Website designed and coded by myself using React and a UI Library <a href='https://ant.design/'>Ant Design</a></p>
            </footer>
        </section>
    )
}
