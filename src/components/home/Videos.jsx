import React from "react";

import { getImageUrl } from "../../utils/";
import Carousel from "./carousel.component";


export const Videos = () => {
    let videos = [
        getImageUrl("videos/phone drop skateboard.mp4"),
        getImageUrl("videos/phone drop skateboard.mp4"),
    ];
    
    return (
        <section id="video">
                <div className="h-[80vh] w-full">
                    <div className="text-center py-10">
                        <h1 className="text-lg pb-1">Gallery</h1>
                        <h2 className="text-4xl  underline underline-offset-4 text-red-600">Videos</h2>
                    </div>
                    <div className="h-96 bg-yellow-100">
                        <Carousel slides={videos} className=" " />
                    </div>
                </div>
            </section>
    
    );
    }


