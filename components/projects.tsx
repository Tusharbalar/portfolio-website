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
            <Project key={index} />
          ))
        }
      </div>
    </section>
  )
}

function Project() {
  return <div></div>
}