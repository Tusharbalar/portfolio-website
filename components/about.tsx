"use client";

import { motion } from 'framer-motion';
import React from 'react'
import SectionHeading from './section-heading';

export default function About() {

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>
        As an accomplished <span className="font-medium">Senior Software Engineer</span> with over <span className="italic">8+ years</span> of experience in JavaScript{" "}
        development, I have honed my skills in creating robust, scalable, and efficient software solutions.{" "}
        My journey in the tech industry has been marked by a consistent drive for excellence and innovation,
        particularly in the security domain. I possess a solid background in <span className="font-medium">JavaScript, Angular, ReactJS, Splunk, and Python,</span>
        which has enabled me to lead development teams effectively through complex coding, testing, and integration processes.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}

