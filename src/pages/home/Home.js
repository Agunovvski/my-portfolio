import { DownloadOutlined, ReadOutlined } from '@ant-design/icons/lib/icons'
import { BackTop } from 'antd'
// import { Button } from 'antd'
import React from 'react'
import '../../assets/templateStyles.css'
import LearnMore from './components/LearnMore'
import './HomeStyles.css'

export default function Home() {
    return (
        <section>
            <div className='template-width'>
                <div className='home-container'>
                    <div className='title-container'>
                        <div>
                            <h1>Hi, Agung here.
                                <br />
                                Simply a UI/UX Designer
                            </h1>
                            {/* <h1>Simply a UI/UX Designer.</h1> */}
                        </div>
                        <div>
                            <h3>Connecting the dots between user needs and business goals.</h3>
                            <h5>(Aaanndd probably fixing a syntax error as you are reading this.)</h5>
                        </div>
                    </div>
                    {/* <div>
                        <Button type='primary'>Browse portfolio</Button>
                        <Button type='link'>About me</Button>
                    </div> */}
                </div>
                <div className='home-container about-container' id='about'>
                    <h2>About me.</h2>
                    <h2 className='intro'>With 3+ years of product development experience, I aim to create meaningful experiences for users to get their jobs done while reaching business goals.</h2>
                    <h5>Get to know everything about me through my resume, the design process & principles I adhere to down below:</h5>
                </div>
                <div className='learn-section'>
                    <LearnMore
                        title='Resume.'
                        description='Dive deep in my experiences in detail up until now!'
                        cta='The usual, download..'
                        icon={<DownloadOutlined />}
                    />
                    <LearnMore
                        title='Design process.'
                        description='3 main steps during the projects I follow.'
                        cta='Learn more'
                        icon={<ReadOutlined />}
                    />
                    <LearnMore
                        title='Design principles.'
                        description='I have 3 principles that I adhere to when creating meaninful products.'
                        cta='Learn more'
                        icon={<ReadOutlined />}
                    />
                </div>
            </div>
            <BackTop></BackTop>
        </section>
    )
}
