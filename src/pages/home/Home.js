import { DownloadOutlined, ReadOutlined } from '@ant-design/icons/lib/icons'
import { BackTop, Tooltip } from 'antd'
import MyPhoto from '../../assets/images/work-self.png'
import React from 'react'
import '../../assets/templateStyles.css'
import LearnMore from './components/LearnMore'
import './HomeStyles.css'
import MyWorkBanner from './components/MyWorkBanner'
import { useEffect } from 'react'

export default function Home() {


    // scroll to the top on render
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

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
                                Simply a UI/UX Designer.
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
                        description='I have 4 principles that I adhere to when creating meaningful products.'
                        cta='Learn more'
                        icon={<ReadOutlined />}
                        link='/design-principles'
                    />
                </div>
            </div>
            <MyWorkBanner
                title='My work.'
                description='Have a look at how the design process and principles work in action in my work.'
                cta='View my work'
            >
            </MyWorkBanner>
            <Tooltip title='Back to top'>
                <BackTop></BackTop>
            </Tooltip>
        </section>
    )
}
