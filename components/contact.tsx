'use client';

import React from 'react'
import SectionHeading from './section-heading'
import useSectionInView from '@/lib/hooks';
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/sendEmail';
import toast from "react-hot-toast";
import SubmitBtn from './submit-btn';

export default function Contact() {

  const { ref } = useSectionInView('Contact', 0.5);
  return (
    <motion.section
      id="contact"
      ref={ref}
      className='mb-20 sm:mb-28 w-[min-(100%,38rem)] text-center'
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration: 1
      }}
      viewport={{
        once: true
      }}
    >
      <SectionHeading>Contact</SectionHeading>
      <p className='text-gray-700 -mt-6'>Please contact me directly at <a href='mailto:balar.tushar1@gmail.com'>balar.tushar1@gmail.com</a>{" "}
        or through this form.
      </p>
      <form className='mt-10 flex flex-col' action={async (formData) => {
        const { data, error } = await sendEmail(formData);
        if (error) {
          toast.error(error);
          return;
        }

        toast.success("Email sent successfully!");
      }}>
        <input
          type='email'
          name="senderEmail"
          className='h-14 px-4 rounded-lg borderBlack'
          placeholder='Your email'
          required
          maxLength={500}
        />
        <textarea
          className='h-52 my-3 rounded-lg borderBlack p-4'
          name="message"
          placeholder='Your message'
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  )
}
