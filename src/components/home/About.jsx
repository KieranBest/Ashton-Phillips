import React from "react";

import { getImageUrl } from "../../utils";
const bgImage = new Image();
bgImage.src = getImageUrl("37.jpg");

export const About = () => {
    return (
        <section id="about">
            <div className="pt-20  w-full h-[60vh] p-4 relative">
                <img src={getImageUrl("37.jpg")} className="w-full h-full object-cover object-center absolute mix-blend-overlay rounded-lg" alt="Ashton Phillips" />
                <div className="text-wrap text-center sm:w-[50%]">
                    <div className="pt-10 pb-5">
                        <h1 className="text-4xl underline underline-offset-4 pb-1 text-red-600">About Me</h1>
                        <h2 className="text-lg">Who I Am</h2>
                    </div>
                    <div className="text-xl pt-10">
                        <p>
                            I like big butts an´ I can not lie.<br/>
                            You otha brothas can´t deny.<br/>
                            That when a girl walks in wit´ a itty bitty waist an´<br/>
                            A round thing in yo´ face. You get SPRUNG.<br/>
                            Want to pull up tough, cuz you notice that butt was STUFFED.<br/>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}