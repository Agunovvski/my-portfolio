import { Button } from 'antd'
import React from 'react'
import '../../assets/templateStyles.css'

export default function Home() {
    return (
        <section>
            <div className='template-width'>
                <h1>Hi, Agung here.</h1>
                <h1>Simply a UI/UX Designer.</h1>
                <Button type='primary'>Browse portfolio</Button>
                <Button type='link'>About me</Button>
            </div>
        </section>
    )
}
