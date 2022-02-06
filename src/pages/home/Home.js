import { DownloadOutlined, ReadOutlined } from '@ant-design/icons/lib/icons'
import { BackTop, Button, Tooltip } from 'antd'
import { NavLink } from 'react-router-dom'
import MyPhoto from '../../assets/images/work-self.png'
import React from 'react'
import '../../assets/templateStyles.css'
import LearnMore from './components/LearnMore'
import './HomeStyles.css'

export default function Home() {
    return (
        <section>
            <div className='template-width'>
                <div className='home-container'>
                    <img className='home-image' src={MyPhoto} alt="self" style={{
                        borderRadius: '50%',
                        height: ' 20vh',
                    }} />
                    <div className='title-container'>
                        <div>
                            <h1>Hi, <mark>Agung</mark> here.
                                <br />
                                Simply a UI/UX Designer
                            </h1>
                        </div>
                        <div>
                            <h3>Connecting the dots between user needs and business goals.</h3>
                            <h5>(Aaanndd probably fixing a syntax error as you are reading this.)</h5>
                        </div>
                    </div>
                </div>
                <div className='home-container about-container' id='about'>
                    <h2>About me.</h2>
                    <h2 className='intro'>With 3+ years of product development experience, I aim to create <mark>meaningful experiences</mark> for users to get their jobs done while reaching business goals.</h2>
                    <p>Get to know everything about me through my resume, the design process & principles I adhere to down below:</p>
                </div>
                <div className='learn-section'>
                    <LearnMore
                        title='Resume.'
                        description='Dive deep in my experiences in detail up until now!'
                        cta='The usual, download..'
                        icon={<DownloadOutlined />}
                        link='/design-process'
                    />
                    <LearnMore
                        title='Design process.'
                        description='3 main steps during the projects I follow.'
                        cta='Learn more'
                        icon={<ReadOutlined />}
                        link='/design-process'
                    />
                    <LearnMore
                        title='Design principles.'
                        description='I have 3 principles that I adhere to when creating meaningful products.'
                        cta='Learn more'
                        icon={<ReadOutlined />}
                        link='/design-principles'
                    />
                </div>
            </div>
            <div className='template-width home-work'>
                <h2>My work.</h2>
                <p>Have a look at some highlighted projects where the design process is captured and principle followed.</p>
                <Button
                    type='primary'
                    size='large'
                >
                    <NavLink to='/post'>View my work</NavLink>
                </Button>
            </div>
            <Tooltip title='Back to top'>
                <BackTop></BackTop>
            </Tooltip>
        </section>
    )
}
