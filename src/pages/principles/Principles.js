import React, { useEffect } from 'react';
import { Breadcrumb, Card, Divider } from 'antd';
import BreadcrumbItem from 'antd/lib/breadcrumb/BreadcrumbItem';
import { Link } from 'react-router-dom';
import MyWorkBanner from '../home/components/MyWorkBanner';
import './PrinciplesStyles.css'

export default function Principles() {

    // scroll to the top on render
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return <section>
        <div className='template-width'>
            <Breadcrumb>
                <BreadcrumbItem>
                    <Link to='/'>Home /</Link>
                </BreadcrumbItem>
            </Breadcrumb>
            <h1>Design principles.</h1>
            <div className='principles-container'>
                <Card>
                    <h2>Title</h2>
                    <p>Description</p>
                </Card>
            </div>
            <Divider />
            <MyWorkBanner
                title='My work.'
                description='Dive deep in my work to see the design principles in action'
                cta='View my work'
            ></MyWorkBanner>
        </div>
    </section>;
}
