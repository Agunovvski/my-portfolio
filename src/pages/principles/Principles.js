import React, { useEffect } from 'react';
import { Breadcrumb, Divider } from 'antd';
import BreadcrumbItem from 'antd/lib/breadcrumb/BreadcrumbItem';
import { Link } from 'react-router-dom';
import MyWorkBanner from '../home/components/MyWorkBanner';

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
            <Divider />
            <MyWorkBanner
                title='My work.'
                description='Dive deep in my work to see the design principles in action'
                cta='View my work'
            ></MyWorkBanner>
        </div>
    </section>;
}
