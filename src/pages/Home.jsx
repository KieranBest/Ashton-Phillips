import React from "react";

import { Intro } from "../components/home/Intro";
import { About } from "../components/home/About";
import { Gallery } from "../components/home/Gallery";
import { Contact } from "../components/home/Contact";

export const Home = () => {
    return (
        <div className="bg-gradient-to-b from-black via-zinc-800 to-black text-white overflow-x-hidden scroll-smooth font-dm">
            < Intro />
            < About />
            < Gallery />
            < Contact />
        </div>
    );
};