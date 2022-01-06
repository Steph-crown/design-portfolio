import { FC, useEffect, useState } from "react";
import { Header } from "../../../components/header";
import { Menu } from "../../../components/menu";
import { ShotContainer } from "../style";
import HngImage from "./../../../assets/nft-landing.png";
import HngImage1 from "./../../../assets/project/nft-landing1.png";
import HngImage2 from "./../../../assets/project/nft-landing2.png";

export const Nft: FC = () => {
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
                        <h1>NFT Landing Page</h1>
                        <p>
                            With all the razzmatazz going on about web3, NFT
                            (Non-Fungible Token), I decided I would not be left
                            behind, so I designed a banner section of an NFT web
                            application. I did a little research to understand
                            what NFT was, and I am looking to go into the field.
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
