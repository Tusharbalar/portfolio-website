import React from "react";
import { CiBadgeDollar } from "react-icons/ci";
import { CiGlobe } from "react-icons/ci";
import { GrShieldSecurity } from "react-icons/gr";
import { CiVirus } from "react-icons/ci";
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
        title: "Front-End Developer",
        location: "Axelor India",
        description:
            "I graduated after 4 years of studying. I immediately found a job as a front-end developer.",
        icon: React.createElement(CiBadgeDollar),
        date: "2014",
    },
    {
        title: "Front-End Developer",
        location: "NxtLife Technologies Ltd",
        description:
            "I worked as a front-end developer for two years on a product called Yugma, where I utilized Angular, Ionic, Google Charts, and other front-end tools.",
        icon: React.createElement(CiGlobe),
        date: "2016 - 2018",
    },
    {
        title: "Software Engineer",
        location: "Rapidops Inc.",
        description:
            "I worked on a CRM project called Salesmate, using a tech stack that included Angular, React.js, Next.js, TypeScript, Tailwind, Prisma, and MongoDB.",
        icon: React.createElement(CiVirus),
        date: "2018 - 2019",
    },
    {
        title: "Sr. Software Engineer",
        location: "Crest Data",
        description:
            "At Crest Data Systems, I have played a pivotal role in developing Splunk applications for data visualization and analysis, contributing significantly to the UCC framework and leading UI migrations from Backbone.js to React.js. My work on security products, including Cisco ASA, Cisco ESA, and Carbon Black, has deepened my expertise in the security domain, enhancing my ability to deliver solutions that meet stringent security standards.",
        icon: React.createElement(GrShieldSecurity),
        date: "2019 - current",
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
