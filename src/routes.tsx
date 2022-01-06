import { FC } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { AboutPage } from "./pages/about";
import { HomePage } from "./pages/home";
import { Hng } from "./pages/shots/hng";

export const Pages: FC = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={() => <HomePage />} />
                    <Route exact path="/about" render={() => <AboutPage />} />
                    <Route exact path="/hng" render={() => <Hng />} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};
