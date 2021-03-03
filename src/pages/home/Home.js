import React, { useState, useEffect } from 'react'
import sanityClient from '../../client.js'
import '../../assets/templateStyles.css'
import './HomeStyles.css'
import ParticlesBg from "particles-bg";
import { Image, Tooltip, Skeleton } from 'antd'
import { Link } from 'react-router-dom'
import MyPhoto from '../../assets/images/my-photo.png'
import Project from '../../components/project-card/Project'

export default function Home() {

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

    return (
        <section>
            <div className='template-width'>
                <div className='home-fold home-section'>
                    <Tooltip
                        overlayClassName='home-tooltip'
                        title='Agung Tarumampen'
                        visible='true'
                    >
                        <Image
                            style={{
                                borderRadius: '1000px'
                            }}
                            src={MyPhoto}
                        />
                    </Tooltip>
                    <h1>Welcome to the portfolio of a <mark>UI/UX Designer</mark></h1>
                </div>
                <div className='home-projects home-section'>
                    <h2>Latest projects</h2>
                    <div>
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
                        {!postData &&
                            <>
                                <Skeleton active='true' />
                                <Skeleton active='true' />
                            </>
                        }
                    </div>
                </div>
                <div className='home-about home-section'>
                    <h2>About myself</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius sit amet sem vel aliquet. Nulla sapien est, cursus non dignissim nec, ullamcorper a mauris. Fusce ultrices velit ac nibh ornare, a ornare libero vestibulum. Nunc auctor nunc tellus, sit amet sodales ex finibus nec. Aenean cursus ipsum vel purus venenatis, volutpat suscipit leo mollis. Fusce consectetur metus et consectetur efficitur. Ut diam enim, posuere non odio vitae, venenatis interdum lectus.</p>
                </div>
            </div>
            <ParticlesBg
                type="cobweb"
                color={["#f4f4f4", "#f7f7f7"]}
                num={[25]}
                bg={true} />
        </section>
    )
}
