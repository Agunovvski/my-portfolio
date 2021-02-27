import React, { useEffect, useState } from 'react'
import sanityClient from '../../../client.js'

export default function Project() {

    const [projectData, setProjectData] = useState(null)

    useEffect(() => {
        sanityClient.fetch(`*[_type == 'project']{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
        }`)
            .then((data) => setProjectData(data))
            .catch(console.error)
    }, [])

    return (
        <section>
            <div className='template-width'>
                <h1>Single Project</h1>
                {projectData && projectData.map((project, index) => (
                    <div key={index}>
                        <article>
                            <h3>{projectData.title}</h3>
                            <div>
                                <span>{new Date(project.date).toLocaleDateString()}</span>
                                <span>{project.place}</span>
                                <span>{project.projectType}</span>
                                <p>{project.description}</p>
                                <span>{project.tags}</span>
                            </div>
                        </article>
                    </div>
                ))}
            </div>
        </section>
    )
}
