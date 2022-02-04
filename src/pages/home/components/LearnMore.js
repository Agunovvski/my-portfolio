import React from 'react';
import '../../../assets/templateStyles.css'
import { Button } from 'antd';

export default function LearnMore(props) {

    const buttonStyle = {
        paddingLeft: '0px',
    };

    return <div className='learn-more-card'>
        <div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
        <Button size=' small' type='link' icon={props.icon} style={buttonStyle}>{props.cta}</Button>
    </div>;
}
