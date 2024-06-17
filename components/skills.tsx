import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'

export default function Skils() {
  return (
    <section>
      <SectionHeading>
        My Skills
      </SectionHeading>
      <ul>
        {
          skillsData.map((skill, index) => (
            <li key={index}>skill</li>
          ))
        }
      </ul>
    </section>
  )
}
