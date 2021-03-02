import React from 'react'
import '../assets/templateStyles.css'
import { Result, Button } from 'antd'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <section>
            <div className='template-width'>
                <Result
                    status="404"
                    title="404"
                    subTitle="Sorry, the page you visited does not exist."
                    extra={<Button type="primary"><Link to='/'>Back Home</Link></Button>}
                />
            </div>
        </section>
    )
}
