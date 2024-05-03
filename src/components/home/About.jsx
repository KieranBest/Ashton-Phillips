import React from "react";

import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section id="about">
            <div className="pt-20 w-full h-[60vh] py-4 relative overflow-hidden">
                <img src={getImageUrl("37.jpg")} 
                    className="w-full h-full object-cover object-center absolute mix-blend-overlay rounded-lg px-6" 
                    alt="Ashton Phillips 37" loading=" lazy" />
                <div className="text-wrap flex h-full sm:w-[50%] px-6 opacity-90">
                    <div className=" m-auto text-center">
                        <div className="pb-5">
                            <h1 className="text-4xl underline underline-offset-4 pb-1 text-red-600">About Me</h1>
                            <h2 className="text-lg">Who I Am</h2>
                        </div>
                        <div className="mx-4 mb-4">
                            <p className="text-sm lg:text-base xl:2xl leading-4 lg:leading-6 pb-3">
                                Hello! I’m Ashton Phillips, an aspiring actor starting his acting journey.
                            </p>
                            <p className="text-sm lg:text-base xl:2xl leading-4 lg:leading-6 pb-3">
                                On this website you can find examples of previous work I've done, be that film, TV, adverts or modelling jobs. I may also upload some footage from acting courses I've completed or currently taking part in.  I’m also a trained vocalist.  Being classically graded at level 7 (Hoping to reach 8 in the future) as well as having a BA Hons in Vocals from BIMM Fulham.
                            </p>
                            <p className="text-sm lg:text-base xl:2xl leading-4 lg:leading-6">
                                Please don’t hesitate to contact me using the form below with any enquiries!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}