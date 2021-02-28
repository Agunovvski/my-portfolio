import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import sanityClient from '../../../client.js'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'

import './SinglePostStyles.css'

import { Skeleton, Breadcrumb } from 'antd'

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
        return <Skeleton active='true' />


    return (
        <section>
            <div className='template-width'>
                <header>
                    <div>
                        <div>
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
                            <div>
                                <img src={urlFor(singlePost.authorImage).url()} alt={singlePost.name} />
                                <p>{singlePost.name}</p>
                            </div>
                        </div>
                        <img src={singlePost.mainImage.asset.url} alt={singlePost.title} />
                    </div>
                </header>
                <div>
                    <BlockContent blocks={singlePost.body} projectId='ispob9gx' dataset='production'></BlockContent>
                </div>
            </div>
        </section>
    )
}
