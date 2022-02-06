import React from 'react';
import { Breadcrumb } from 'antd';
import BreadcrumbItem from 'antd/lib/breadcrumb/BreadcrumbItem';
import { Link } from 'react-router-dom';

export default function Principles() {
    return <section>
        <div className='template-width'>
            <Breadcrumb>
                <BreadcrumbItem>
                    <Link to='/'>Home /</Link>
                </BreadcrumbItem>
            </Breadcrumb>
            <h1>Design principles.</h1>
        </div>
    </section>;
}
