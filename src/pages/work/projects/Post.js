import React, { useState, useEffect } from 'react'
import sanityClient from '../../../client.js'
import { Link } from 'react-router-dom'
import './PostStyles.css'
import { Card, PageHeader } from 'antd'

export default function Post() {

    const [postData, setPostData] = useState(null)

    useEffect(() => {
        sanityClient.fetch(`*[_type == "post"]{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`)
            .then((data) => setPostData(data))
            .catch(console.error)
    }, [])

    const { Meta } = Card;

    return (
        <section>
            <div className='template-width'>
                <PageHeader
                    title='Welcome to my projects'
                ></PageHeader>
                <div className='grid-projects'>
                    {postData && postData.map((post, index) => (
                        <Link to={'/post/' + post.slug.current} key={post.slug.current}>
                            <Card
                                cover={
                                    <img className='project-img' src={post.mainImage.asset.url} alt={post.mainImage.alt} />
                                }
                            >
                                <Meta
                                    title={post.title}
                                />
                            </Card>
                        </Link>
                    ))
                    }
                </div>
            </div>
        </section>
    )
}
