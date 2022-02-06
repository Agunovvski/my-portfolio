import { Breadcrumb } from 'antd';
import BreadcrumbItem from 'antd/lib/breadcrumb/BreadcrumbItem';
import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/templateStyles.css'

export default function Process() {
    return <section>
        <div className='template-width'>
            <Breadcrumb>
                <BreadcrumbItem>
                    <Link to='/'>Home /</Link>
                </BreadcrumbItem>
            </Breadcrumb>
            <h1>Design process.</h1>
        </div>

    </section>;
}
