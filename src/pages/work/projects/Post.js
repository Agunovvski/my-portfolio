import React, { useState, useEffect } from 'react'
import sanityClient from '../../../client.js'
import { Link } from 'react-router-dom'
import './PostStyles.css'
import { Skeleton } from 'antd'
import Project from '../../../components/project-card/Project'

export default function Post() {

    const [postData, setPostData] = useState(null)

    useEffect(() => {
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

    return (
        <section>
            <div className='template-width'>
                <h1>My work collection</h1>
                <div className='grid-projects'>
                    {postData && postData.map((post, index) => (
                        <Link to={'/post/' + post.slug.current} key={post.slug.current}>
                            <Project
                                imgUrl={post.mainImage.asset.url}
                                imgAlt={post.mainImage.alt}
                                title={post.title}
                                projectType={post.projectType}
                                description={post.description}
                            />
                        </Link>
                    ))
                    }
                </div>
            </div>
        </section>
    )
}
