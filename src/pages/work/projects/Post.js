import React, { useState, useEffect } from 'react'
import sanityClient from '../../../client.js'
import { Link } from 'react-router-dom'
import './PostStyles.css'
import { Card, Skeleton } from 'antd'

export default function Post() {

    const [postData, setPostData] = useState(null)
    const [cardLoad, setCardLoad] = useState(false)

    useEffect(() => {
        setCardLoad(true)
        sanityClient.fetch(`*[_type == "post"]{
            title,
            slug,
            description,
            projectType,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`)
            .then((data) => {
                setPostData(data)
                setCardLoad(false)
            })
            .catch(console.error)
    }, [])


    if (!postData)
        return (
            <section>
                <div className='template-width'>
                    <div className='grid-projects'>
                        <Skeleton active='true' />
                        <Skeleton active='true' />
                    </div>
                </div>
            </section>
        )

    // const { Meta } = Card;

    return (
        <section>
            <div className='template-width'>
                <h1>My work collection</h1>
                <div className='grid-projects'>
                    {postData && postData.map((post, index) => (
                        <Link to={'/post/' + post.slug.current} key={post.slug.current}>
                            <Card
                                loading={cardLoad}
                                hoverable='true'
                                cover={
                                    <img className='project-img' src={post.mainImage.asset.url} alt={post.mainImage.alt} />
                                }
                            >
                                <h2>{post.title}</h2>
                                <span>{post.projectType}</span>
                                <p>{post.description}</p>
                            </Card>
                        </Link>
                    ))
                    }
                </div>
            </div>
        </section>
    )
}
