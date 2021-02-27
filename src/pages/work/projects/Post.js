import React, { useState, useEffect } from 'react'
import sanityClient from '../../../client.js'
import { Link } from 'react-router-dom'

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

    return (
        <section>
            <div className='template-width'>
                <h1>Welcome to my blogposts</h1>
                <div>
                    {postData && postData.map((post, index) => (
                        <article key={index}>
                            <Link to={'/post/' + post.slug.current} key={post.slug.current}>
                                <span>
                                    <img src={post.mainImage.asset.url} alt={post.mainImage.alt} />
                                    <span></span>
                                    <h3>{post.title}</h3>
                                </span>
                            </Link>
                        </article>
                    ))
                    }
                </div>
            </div>
        </section>
    )
}
