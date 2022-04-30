import React from 'react';
import { Card, Button } from 'antd';
import { NavLink } from 'react-router-dom';
import '../../../assets/templateStyles.css'

export default function MyWorkBanner(props) {
    return <>
        <Card bordered={false} className='template-width home-work'>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <Button
                type='primary'
                size='large'
            >
                <NavLink to='/post'>{props.cta}</NavLink>
            </Button>
        </Card>
    </>;
}
