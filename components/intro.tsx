"use client";

import React from 'react'
import Image from "next/image";

export default function Intro() {
    return (
        <section
            id="home"
        >
            <div>
                <Image
                    // src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=368&h=368&q=100"
                    src="https://avatars.githubusercontent.com/u/4783557?v=4"
                    alt="Tushar Balar"
                    width="192"
                    height="192"
                    quality="95"
                    priority={true}
                    className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                />
            </div>
        </section>
    )
}
