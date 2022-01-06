import { FC } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { AboutPage } from "./pages/about";
import { HomePage } from "./pages/home";
import { Hng } from "./pages/shots/hng";
import { Mathdom } from "./pages/shots/mathdom";
import { MusicPlay } from "./pages/shots/musicplay";
import { Nft } from "./pages/shots/nft";
import { Studics } from "./pages/shots/studics";

export const Pages: FC = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={() => <HomePage />} />
                    <Route exact path="/about" render={() => <AboutPage />} />
                    <Route exact path="/hng" render={() => <Hng />} />
                    <Route exact path="/mathdom" render={() => <Mathdom />} />
                    <Route
                        exact
                        path="/musicplay"
                        render={() => <MusicPlay />}
                    />
                    <Route exact path="/nft" render={() => <Nft />} />
                    <Route exact path="/studics" render={() => <Studics />} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};
