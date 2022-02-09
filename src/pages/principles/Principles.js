import React, { useEffect } from 'react';
import { Breadcrumb, Card, Divider, Steps } from 'antd';
import BreadcrumbItem from 'antd/lib/breadcrumb/BreadcrumbItem';
import { Link } from 'react-router-dom';
import MyWorkBanner from '../home/components/MyWorkBanner';
import './PrinciplesStyles.css'

export default function Principles() {

    // scroll to the top on render
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // Steps

    const { Step } = Steps;

    return <section>
        <div className='template-width'>
            <Breadcrumb>
                <BreadcrumbItem>
                    <Link to='/'>Home /</Link>
                </BreadcrumbItem>
            </Breadcrumb>
            <h1>Design principles.</h1>
            <p>Working in this subjective field every designer has their own views of what design should follow. Here are some of my main Design Principles I adhere to when it comes to good design: </p>
            <div className='steps-container'>
                <h3>Good design</h3>
                <Steps labelPlacement='vertical'>
                    <Step
                        status='In Progress'
                        title='has good reasoning'
                    ></Step>
                    <Step
                        status='In Progress'
                        title='is never done'
                    ></Step>
                    <Step
                        status='In Progress'
                        title='gets the job done'
                    ></Step>
                    <Step
                        status='In Progress'
                        title='is accessible'
                    ></Step>
                </Steps>
            </div>
            <div className='principles-container'>
                <Card>
                    <h2>Title</h2>
                    <p>Description</p>
                </Card>
            </div>
            <Divider />
            <MyWorkBanner
                title='Design Principles in action.'
                description='Dive deep in my work to see the design principles in action!'
                cta='View my work'
            ></MyWorkBanner>
        </div>
    </section>;
}
