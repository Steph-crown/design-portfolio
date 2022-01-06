import { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "../buttons";
import { IProjectProps, IStackProps } from "./interface";
import { ProjectContainer, StackContainer } from "./style";

export const Project: FC<IProjectProps> = ({
    name,
    image,
    description,
    horizontal,
    link,
}) => {
    // useEffect(() => {

    //     return () => {

    //     }
    // }, [])
    return (
        <ProjectContainer horizontal={horizontal}>
            <div className="first">
                <h2 data-aos="fade-up">{name}</h2>
                <p data-aos="fade-up">{description}</p>
                {/* <div data-aos="fade-up" className="stacks">
                    {stacks?.map((stack) => (
                        <Stack key={stack} name={stack} />
                    ))}
                </div> */}
                <div data-aos="fade-up">
                    {" "}
                    <Link to={link}>
                        {" "}
                        <Button>View Shots</Button>
                    </Link>
                </div>
            </div>
            <div className="second">
                <img src={image} alt={name} />
            </div>
        </ProjectContainer>
    );
};

export const Stack: FC<IStackProps> = ({ name }) => {
    return (
        <StackContainer>
            <small>{name}</small>
        </StackContainer>
    );
};
