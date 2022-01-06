import { FC, useEffect, useState } from "react";
import { Header } from "../../../components/header";
import { Menu } from "../../../components/menu";
import { ShotContainer } from "../style";
import HngImage from "./../../../assets/hng school.png";
import HngImage1 from "./../../../assets/project/hng1.png";
import HngImage2 from "./../../../assets/project/hng2.png";

export const Hng: FC = () => {
    const [menuOpen, setMenuOpen] = useState<Boolean>(false);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <ShotContainer>
            <Header curr={[0]} {...{ menuOpen, setMenuOpen }} />
            <Menu curr={[0]} {...{ menuOpen, setMenuOpen }} />
            <section>
                <div className="flex-side">
                    <div className="part-1">
                        <h1>HNG School Landing Page</h1>
                        <p>
                            I designed it as one of the tasks during the HNG i8
                            internship. It is a landing page for a fictional
                            school - HNG. I had fun designing this. It was one
                            of my first full landing page design
                        </p>
                    </div>
                    <img src={HngImage} alt="hng" />
                </div>
                <div className="shots">
                    <img src={HngImage1} alt="HNG Shot 1" />
                    <img src={HngImage2} alt="HNG Shot 2" />
                </div>
                <p className="end">End of Shots</p>
            </section>
        </ShotContainer>
    );
};
