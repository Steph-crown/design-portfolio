import { FC } from "react";
import { ProjectSectionContainer } from "./style";
import Studics from "./../../assets/studics.png";
import Hng from "./../../assets/hng school.png";
import newfolio from "./../../assets/new-folio.png";
import mathdom from "./../../assets/mathdom.png";
import musicplay from "./../../assets/musicplay.png";
import nft from "./../../assets/nft-landing.png";
import studics from "./../../assets/studics app.png";

import { Project } from "../project";
import { IProjectProps } from "../project/interface";

export const ProjectSection: FC = () => {
    const projects: IProjectProps[] = [
        {
            name: "Hng School Landing Page",
            image: Hng,
            description:
                "I designed it as one of the tasks during the HNG i8 internship. It is a landing page for a fictional school - HNG. I had fun designing this. It was one of my first full landing page design",
            horizontal: true,
            link: "/hng",
        },

        {
            name: "Steph NFT",
            image: nft,
            horizontal: false,
            description:
                "With all the razzmatazz going on about web3, NFT (Non-Fungible Token), I decided I would not be left behind, so I designed a banner section of an NFT web application. I did a little research to understand what NFT was, and I am looking to go into the field",
            link: "https://247-nft.netlify.app/",
        },
        {
            name: "A Math Blog",
            image: mathdom,
            horizontal: false,
            description:
                "There are a lot of different categories of blogs ranging from fashion to tech and education. But I noticed that blogs that strictly wrote articles on Mathematics were not so much (or I did not notice a lot), so I designed one.",
            link: "https://steph-portfolio.vercel.app/",
        },
        {
            name: "studics App",
            image: studics,
            horizontal: true,
            description:
                "Studics app is an e-learning application where users can register for courses, draft a study schedule. It also gives students access to verified mentors. Students can also register for and write certification exams for any course",
            link: "https://musicplay-app-typescript-steel.vercel.app/",
        },
        {
            name: "Studics Hero",
            image: Studics,
            horizontal: false,
            description:
                "I designed a hero page that shows users an e-learning application with directions on how to get the mobile application, either through the Google Playstore or Apple Appstore. Got inspiration from the Paystack hero page.",
            link: "https://steph-crown-Studics.netlify.app/",
        },
        {
            name: "MusicPlay",
            image: musicplay,
            horizontal: false,
            description:
                "I think this is one I love so much. I took some time on this one. It is a music player app. An app that allows you to play songs while viewing the lyrics. Got inspiration from YouTube Music, Spotify, and Boomplay",
            link: "https://musicplay-app-typescript-steel.vercel.app/",
        },
        {
            name: "Current Portfolio",
            image: newfolio,
            horizontal: true,
            description:
                "This is what you are currently viewing 😊. I thought I needed to develop a new portfolio, designing it from scratch before coding it out. Made sure it is all-device-responsive, and added some cool transitions with CSS",
            link: "https://www.stephcrown.com/",
        },
    ];
    return (
        <ProjectSectionContainer>
            <h6 data-aos="fade-right">SELECTED PROJECTS</h6>
            <h1 data-aos="fade-right">Projects</h1>
            <div className="projects-container">
                {projects.map((proj, index) => (
                    <Project key={proj.name + index} {...proj} />
                ))}
            </div>
        </ProjectSectionContainer>
    );
};
