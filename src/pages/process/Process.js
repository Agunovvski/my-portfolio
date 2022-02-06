import { Breadcrumb, Card, Timeline } from 'antd';
import BreadcrumbItem from 'antd/lib/breadcrumb/BreadcrumbItem';
import TimelineItem from 'antd/lib/timeline/TimelineItem';
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../../assets/templateStyles.css'
import './ProcessStyles.css'

export default function Process() {


    // scroll to the top on render
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return <section>
        <div className='template-width'>
            <Breadcrumb>
                <BreadcrumbItem>
                    <NavLink to='/'>Home /</NavLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <h1>Design process.</h1>
            <p>Essential steps to deliver meaningful experiences:</p>
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
            <Card
                bordered={false}
            >
                <h3>Understand</h3>
                <p>Testing description</p>
            </Card>
        </div>

    </section>;
}
