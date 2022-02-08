import { Breadcrumb, Card, Divider, List, Tag, Timeline } from 'antd';
import BreadcrumbItem from 'antd/lib/breadcrumb/BreadcrumbItem';
import TimelineItem from 'antd/lib/timeline/TimelineItem';
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../../assets/templateStyles.css'
import MyWorkBanner from '../home/components/MyWorkBanner';
import './ProcessStyles.css'

export default function Process() {


    // scroll to the top on render
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    // lists methodologies render

    const understandList = [
        'Interviews',
        'Customer Journey',
        'Participant observation',
        'Card sorting',
        'Online analytics',
    ]

    const defineList = [
        'Interviews',
        'Customer Journey',
        'Participant observation',
        'Card sorting',
        'Online analytics',
    ]

    const ideateList = [
        'Interviews',
        'Customer Journey',
        'Participant observation',
        'Card sorting',
        'Online analytics',
    ]

    const iterateList = [
        'Interviews',
        'Customer Journey',
        'Participant observation',
        'Card sorting',
        'Online analytics',
    ]

    return <section>
        <div className='template-width'>
            <Breadcrumb>
                <BreadcrumbItem>
                    <NavLink to='/'>Home /</NavLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <h1>Design process.</h1>
            <p>To me, the design thinking philosophy is something I live by. To deliver meaningful experiences for the end user I follow these main steps:</p>
            <Timeline mode='left' pending='Iterate'>
                <TimelineItem>
                    Understand
                </TimelineItem>
                <TimelineItem>
                    Define
                </TimelineItem>
                <TimelineItem>
                    Ideate
                </TimelineItem>
            </Timeline>
            <div className='process-container'>
                <Card
                    bordered={false}
                >
                    <h3>Understand</h3>
                    <p>This is the first thing to consider when starting out any project: understanding the users, their needs, and problems.</p>
                    <h5>Favorite metholodogies:</h5>
                    <List itemLayout='horizontal' dataSource={understandList} renderItem={item => (
                        <Tag>{item}</Tag>
                    )}>
                    </List>
                </Card>
                <Card
                    bordered={false}
                >
                    <h3>Define</h3>
                    <p>This is the first thing to consider when starting out any project: understanding the users, their needs, and problems.</p>
                    <h5>Favorite metholodogies:</h5>
                    <List itemLayout='horizontal' dataSource={defineList} renderItem={item => (
                        <Tag>{item}</Tag>
                    )}>
                    </List>
                </Card>
                <Card
                    bordered={false}
                >
                    <h3>Ideate</h3>
                    <p>This is the first thing to consider when starting out any project: understanding the users, their needs, and problems.</p>
                    <h5>Favorite metholodogies:</h5>
                    <List itemLayout='horizontal' dataSource={ideateList} renderItem={item => (
                        <Tag>{item}</Tag>
                    )}>
                    </List>
                </Card>
                <Card
                    bordered={false}
                >
                    <h3>Iterate</h3>
                    <p>This is the first thing to consider when starting out any project: understanding the users, their needs, and problems.</p>
                    <h5>Favorite metholodogies:</h5>
                    <List itemLayout='horizontal' dataSource={iterateList} renderItem={item => (
                        <Tag>{item}</Tag>
                    )}>
                    </List>
                </Card>
            </div>
            <Divider />
            <MyWorkBanner
                title='My work.'
                description='Dive deep in my work to see the design process in action'
                cta='View my work'
            ></MyWorkBanner>
        </div>

    </section >;
}
