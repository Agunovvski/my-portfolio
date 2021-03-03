import React from 'react'
import { Card } from 'antd'
import './ProjectStyles.css'

export default function Project(props) {


    return (
        <Card
            className='project-card'
            hoverable='true'
            cover={
                <div
                    className='project-img'
                    style={{
                        background: `url(${props.imgUrl})`
                    }}
                >

                </div>
            }
        >
            <h2>{props.title}</h2>
            <span>{props.projectType}</span>
            <p>{props.description}</p>
        </Card>
    )
}
