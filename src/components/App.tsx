import * as React from "react";
import { hot } from "react-hot-loader";
import "./../assets/scss/App.scss";

import Header from './header/Header';
import Footer from './footer/Footer';
import Slider from './slider/Slider';

const App = () => {
    return (
        <main className="app">
            <Header />
            <Slider />
            <Footer/>
        </main>
    );
}

declare let module: object;

export default hot(module)(App);
