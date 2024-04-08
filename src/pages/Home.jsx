import React from "react";

import { Intro } from "../components/home/Intro";

export const Home = () => {
    return (
        <div className="top-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-800 via-blue-950 to-black text-white flex justify-center items-center flex-col h-[84vh]">
            < Intro />
        </div>
    );
};