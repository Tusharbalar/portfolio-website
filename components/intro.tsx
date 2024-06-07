"use client";

import React from 'react'
import Image from "next/image";
import { motion } from 'framer-motion';

export default function Intro() {
    return (
        <section
            id="home"
        >
            <div className='flex items-center justify-center'>
                <div className='relative'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: 'tween',
                            duration: 0.2
                        }}
                    >
                        <Image
                            src="https://avatars.githubusercontent.com/u/4783557?v=4"
                            alt="Tushar Balar"
                            width="192"
                            height="192"
                            quality="95"
                            priority={true}
                            className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                        />
                    </motion.div>

                    <span className='absolute bottom-0 right-0 text-4xl'>
                        👋
                    </span>
                </div>
            </div>
        </section>
    )
}
