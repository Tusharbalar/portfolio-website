import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import invoiceApp from "@/public/invoiceApp.png";
import chatApp from "@/public/chatApp.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Graduated bootcamp",
        location: "Miami, FL",
        description:
            "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
        icon: React.createElement(LuGraduationCap),
        date: "2019",
    },
    {
        title: "Front-End Developer",
        location: "Orlando, FL",
        description:
            "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
        icon: React.createElement(CgWorkAlt),
        date: "2019 - 2021",
    },
    {
        title: "Full-Stack Developer",
        location: "Houston, TX",
        description:
            "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
        icon: React.createElement(FaReact),
        date: "2021 - present",
    },
] as const;

export const projectsData = [
    {
        title: "Chat App",
        description:
            "I served as a full-stack developer on this project for six months, creating a system that enabled users to chat with others.",
        tags: ["Angular2", "Ionic", "Firebase", "bootstrap", "Figma"],
        imageUrl: chatApp,
        githubUrl: 'https://github.com/Tusharbalar/ChatApp'
    },
    {
        title: "Invoice App",
        description:
            `User can able to create invoice and store the data in the database, can see the realtime changes.`,
        tags: ["Vue", "TypeScript", "CSS", "HTML", "MySQL"],
        imageUrl: invoiceApp,
        githubUrl: 'https://github.com/Tusharbalar/vue-invoice'
    },
    {
        title: "Word Analytics",
        description:
            "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
        tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
        imageUrl: wordanalyticsImg,
        githubUrl: 'https://github.com/Tusharbalar/vue-invoice'
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "AngularJS",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "Redux",
    "PostgreSQL",
    "Python",
    "Django",
    "Framer Motion",
] as const;
