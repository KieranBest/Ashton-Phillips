import React from "react";

import { Intro } from "../components/home/Intro";
import { About } from "../components/home/About";
import { Videos } from "../components/home/Videos";

export const Home = () => {
    return (
        <div className="bg-gradient-to-b from-black via-zinc-800 to-black text-white">
            < Intro />
            < About />
            < Videos />
        </div>
    );
};