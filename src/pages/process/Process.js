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
        'Field research',
        'Empathy map',
        'Persona'
    ]

    const defineList = [
        'Job Stories',
        'Product Alignment Document',
        'How might we..?',
    ]

    const ideateList = [
        'Good & Bad practice search',
        'Competitor Analysis',
        'Trend Analysis',
        'Benchmarking',
        'Crazy 8s',
        'Sketchstorming',
        'Co-creation',
        'Morphological chart',
        'Scamper',
        'Card sorting',
        'Morphological chart'
    ]

    const iterateList = [
        'Prototyping',
        'Usability Testing',
        'A/B Testing',
        'Beta Testing',
        'Online Analytics',
        'KPIs',
        'Success metrics'
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
                    <p>In this phase we define the design challenge / problem based on the insights that the data delivers.</p>
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
                    <p>The (fun) part where creativity comes into play. From brainstorming & Lo-Fi sketches to a Hi-Fi prototypes.</p>
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
                    <p>A design is never really done. Over time things change, the business changes so there is always room for improvement. This phase is a continious loop where we take feedback from either the live product or prototype and iterate based on user feedback.</p>
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
