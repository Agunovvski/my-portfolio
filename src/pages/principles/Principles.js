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
                <h3>Good design ..</h3>
                <Steps labelPlacement='vertical'>
                    <Step
                        status='In Progress'
                        title='.. has good reasoning'
                    ></Step>
                    <Step
                        status='In Progress'
                        title='.. is never done'
                    ></Step>
                    <Step
                        status='In Progress'
                        title='.. is meaningful'
                    ></Step>
                    <Step
                        status='In Progress'
                        title='.. delights the user'
                    ></Step>
                </Steps>
            </div>
            <div className='principles-container'>
                <Card bordered={false}>
                    <h2>Good design has good reasoning.</h2>
                    <p>In this subjective field there I feel like there is no real good or bad design. What I like might differ from what you like, arguing about it leads us nowhere. What we could consider good or bad is the reasoning behind it, the data.</p>
                    <p>Good product design should be backed by data whether that is qualitative / quantitative or even just clearly explained with an hypothesis which can then be confirmed through tests / with time.</p>
                </Card>
                <Card bordered={false}>
                    <h2>Good design is never done.</h2>
                    <p>Good design adapts to time. With time things change, people change, business change so the design should make sure to follow those directions while maintaining integrety and what it is known for.</p>
                </Card>
                <Card bordered={false}>
                    <h2>Good design is meaningful.</h2>
                    <p>Good design has to mean something to the user. In the product development context I would say that is getting the job done. Users want to come back to the solution or even better.. can't live without!</p>
                </Card>
                <Card bordered={false}>
                    <h2>Good design delights the user.</h2>
                    <p>Good design delivers a smile on the user face from start to end. This can be achieved through multiple ways like visual design, the experience or interaction.</p>
                    <p>Good design causes the least amount of friction through the entire experience.</p>
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
