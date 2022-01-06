import { FC, useState } from "react";
import { Header } from "../../../components/header";
import { Menu } from "../../../components/menu";
import { ShotContainer } from "../style";

export const Hng: FC = () => {
    const [menuOpen, setMenuOpen] = useState<Boolean>(false);

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
                </div>
            </section>
        </ShotContainer>
    );
};
