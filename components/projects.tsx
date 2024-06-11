import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'

export default function Projects() {
  return (
    <section>
      <SectionHeading>Projects</SectionHeading>
      <div>
        {
          projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))
        }
      </div>
    </section>
  )
}

type ProjectProp = (typeof projectsData)[number];

function Project({
  title,
  description,
  tags,
  imageUrl
}: ProjectProp) {
  return <div>{title}</div>
}