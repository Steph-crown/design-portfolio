import { FC, useEffect, useState } from "react";
import { Header } from "../../../components/header";
import { Menu } from "../../../components/menu";
import { ShotContainer } from "../style";
import HngImage from "./../../../assets/musicplay.png";
import HngImage1 from "./../../../assets/project/musicplay1.png";
import HngImage2 from "./../../../assets/project/musicplay2.png";
import HngImage3 from "./../../../assets/project/musicplay3.png";

export const MusicPlay: FC = () => {
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
                        <h1>MusicPlay</h1>
                        <p>
                            I think this is one I love so much. I took some time
                            on this one. It is a music player app. An app that
                            allows you to play songs while viewing the lyrics.
                            Got inspiration from YouTube Music, Spotify, and
                            Boomplay.
                        </p>
                    </div>
                    <img src={HngImage} alt="hng" />
                </div>
                <div className="shots">
                    <img src={HngImage1} alt="Shot 1" />
                    <img src={HngImage2} alt="Shot 2" />
                    <img src={HngImage3} alt="Shot 2" />
                </div>
                <p className="end">End of Shots</p>
            </section>
        </ShotContainer>
    );
};
