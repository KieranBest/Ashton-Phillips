import React from "react";

import { Intro } from "../components/home/Intro";
import { Videos } from "../components/home/Videos";

export const Home = () => {
    return (
        <div className="top-0 bg-gradient-to-b from-black via-yellow-950 to-black text-white flex justify-center items-center flex-col h-[84vh]">
            < Intro />
            < Videos />
        </div>
    );
};