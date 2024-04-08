import React from "react";

import { getImageUrl } from "../../utils/";
import Carousel from "./carousel.component";


export const Videos = () => {
    let videos = [
        getImageUrl("videos/phone drop skateboard.mp4"),
        getImageUrl("videos/phone drop skateboard.mp4"),
    ];
    
    return (
        <section>
            {/* <div className="grid w-[50%] m-auto pt-11">
                <Carousel slides={videos} />
            </div> */}
        </section>
    );
    }


