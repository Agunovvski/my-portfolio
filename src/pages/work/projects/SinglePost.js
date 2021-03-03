import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import sanityClient from '../../../client.js'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'

import './SinglePostStyles.css'

import { Skeleton, Breadcrumb, Avatar, Image, Statistic, Divider } from 'antd'

const builder = imageUrlBuilder(sanityClient)

function urlFor(source) {
    return builder.image(source)
}

export default function SinglePost() {

    const [singlePost, setSinglePost] = useState(null)
    const { slug } = useParams()


    useEffect(() => {
        sanityClient.fetch(`*[slug.current == '${slug}']{
            title,
            _id,
            slug,
            projectType,
            releaseDate,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            'name': author->name,
            'authorImage': author->image
        }`)
            .then((data) => {
                setSinglePost(data[0])
            })
            .catch(console.error)
    }, [slug])


    if (!singlePost)
        return (
            <section>
                <div className='template-width'>
                    <Skeleton active='true' />
                </div>
            </section>
        )


    return (
        <section>
            <div className='template-width'>
                <div className='singlepost-container'>
                    <div className='metadata-container'>
                        <Breadcrumb>
                            <Breadcrumb.Item>
                                <Link to='/'>Home</Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                <Link to='/post'>My work</Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                {singlePost.title}
                            </Breadcrumb.Item>
                        </Breadcrumb>
                        <h1>{singlePost.title}</h1>
                        <div className='singlepost-metadata'>
                            <span> by {singlePost.name}</span>
                            <Avatar src={urlFor(singlePost.authorImage).url()} alt={singlePost.name} />
                        </div>
                    </div>
                    <div className='singlepost-mainImage'>
                        <Image
                            src={singlePost.mainImage.asset.url} alt={singlePost.title} />
                    </div>
                    <div className='singlepost-statistic'>
                        <Statistic
                            title='Project Type'
                            value={singlePost.projectType}
                        />
                        <Statistic
                            title='Project Date'
                            value={singlePost.releaseDate}
                        />
                    </div>
                </div>
                <Divider
                    style={{
                        marginBottom: '64px'
                    }}
                />
                <div className='singlepost-blockContent'>
                    <BlockContent blocks={singlePost.body} projectId='ispob9gx' dataset='production'></BlockContent>
                </div>
            </div>
        </section>
    )
}
