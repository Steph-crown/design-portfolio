import { FC, useEffect, useState } from "react";
import { Header } from "../../../components/header";
import { Menu } from "../../../components/menu";
import { ShotContainer } from "../style";
import HngImage from "./../../../assets/studics app.png";
import HngImage1 from "./../../../assets/project/studics1.png";
import HngImage2 from "./../../../assets/project/studics2.png";
import HngImage3 from "./../../../assets/project/Studics3.png";

export const Studics: FC = () => {
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
                        <h1>Studics App</h1>
                        <p>
                            Studics app is an e-learning application where users
                            can register for courses, draft a study schedule. It
                            also gives students access to verified mentors.
                            Students can also register for and write
                            certification exams for any course.
                        </p>
                        <p>
                            I designed a hero page that shows users an
                            e-learning application with directions on how to get
                            the mobile application, either through the Google
                            Playstore or Apple Appstore. Got inspiration from
                            the Paystack hero page.
                        </p>
                    </div>
                    <img src={HngImage} alt="hng" />
                </div>
                <div className="shots">
                    <img src={HngImage1} alt="Shot 1" />
                    <img src={HngImage2} alt="Shot 2" />
                    <img src={HngImage3} alt="Shot 3" />{" "}
                    <p className="end">End of Shots</p>
                </div>
            </section>
        </ShotContainer>
    );
};
