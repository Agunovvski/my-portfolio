import React from 'react'
import { Card } from 'antd'
import './ProjectStyles.css'

export default function Project(props) {
    return (
        <Card
            hoverable='true'
            cover={
                <img className='project-img' src={props.imgUrl} alt={props.imgAlt} />
            }
        >
            <h2>{props.title}</h2>
            <span>{props.projectType}</span>
            <p>{props.description}</p>
        </Card>
    )
}
