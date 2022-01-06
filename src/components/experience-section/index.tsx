import { FC } from "react";
import { Experience } from "../experience";
import { ExperienceSectionContainer } from "./style";

export const ExperienceSection: FC = () => {
    const experiences = [
        {
            date: "2021",
            name: "Preneur Pulse ",
            description:
                "Designed user interfaces of e-commerce web application and e-learning platform",
        },
    ];

    return (
        <ExperienceSectionContainer>
            <h6 data-aos="fade-right">JOURNEY SO FAR ...</h6>
            <h1 data-aos="fade-right">Experience</h1>
            <div className="experience-section">
                <div className="line">
                    <div className="scroll"></div>
                </div>
                <div className="right">
                    {experiences.reverse().map((exp) => (
                        <Experience key={exp.name} {...exp} />
                    ))}
                </div>
            </div>
        </ExperienceSectionContainer>
    );
};
