import { Button } from 'antd'
import React from 'react'
import '../../assets/templateStyles.css'
import './HomeStyles.css'

export default function Home() {
    return (
        <section>
            <div className='template-width'>
                <div className='home-container'>
                    <div className='title-container'>
                        <div>
                            <h1>Hi, Agung here.</h1>
                            <h1>Simply a UI/UX Designer.</h1>
                        </div>
                        <div>
                            <h3>Connecting the dots between user needs and business goals.</h3>
                            <h5>(Aaanndd probably fixing a syntax error as you are reading this.)</h5>
                        </div>
                    </div>
                    <div>
                        <Button type='primary'>Browse portfolio</Button>
                        <Button type='link'>About me</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
