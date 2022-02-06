import React from 'react';
import '../../../assets/templateStyles.css'
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';

export default function LearnMore(props) {

    const buttonStyle = {
        paddingLeft: '0px',
    };

    const linkStyle = {
        marginLeft: '8px',
    };

    return <div className='learn-more-card'>
        <div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
        <Button size=' small' type='link' icon={props.icon} style={buttonStyle}>
            <NavLink style={linkStyle} to={props.link}>{props.cta}</NavLink>
        </Button>
    </div>;
}
