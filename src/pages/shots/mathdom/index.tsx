import { FC, useEffect, useState } from "react";
import { Header } from "../../../components/header";
import { Menu } from "../../../components/menu";
import { ShotContainer } from "../style";
import HngImage from "./../../../assets/mathdom.png";
import HngImage1 from "./../../../assets/project/mathdom1.png";
import HngImage2 from "./../../../assets/project/mathdom2.png";

export const Mathdom: FC = () => {
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
                        <h1>Math Blog</h1>
                        <p>
                            There are a lot of different categories of blogs
                            ranging from fashion to tech and education. But I
                            noticed that blogs that strictly wrote articles on
                            Mathematics were not so much (or I did not notice a
                            lot), so I designed one.
                        </p>
                    </div>
                    <img src={HngImage} alt="hng" />
                </div>
                <div className="shots">
                    <img src={HngImage1} alt="HNG Shot 1" />
                    <img src={HngImage2} alt="HNG Shot 2" />{" "}
                    <p className="end">End of Shots</p>
                </div>
            </section>
        </ShotContainer>
    );
};
