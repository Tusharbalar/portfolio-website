'use client';

import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionHeading from './section-heading';
import { experiencesData } from '@/lib/data';

export default function Experience() {
  return (
    <section id="experience">
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline>
        {
          experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement contentStyle={{
                background: '#f3f4f6',
                boxShadow: 'none',
                border: '1px solid rgba(0, 0, 0, 0.5)',
                textAlign: 'left',
                padding: "1.3rem 2rem",
                visibility: 'visible'
              }}
                contentArrowStyle={{
                  borderRight: "0.4rem solid #9ca3af"
                }}
                date={item.date}
                icon={item.icon}
              >
                <h3>{item.title}</h3>
                <p>{item.location}</p>
                <p>{item.description}</p>
              </VerticalTimelineElement>
            </React.Fragment>
          ))
        }
      </VerticalTimeline>
    </section>
  )
}
