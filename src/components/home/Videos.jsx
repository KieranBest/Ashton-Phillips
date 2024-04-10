import React from "react";

import { getImageUrl } from "../../utils/";


export const Videos = () => {
    let videos = [
        "https://bestwebdev-demotest.s3.eu-west-2.amazonaws.com/videos/phone+drop+skateboard.mp4",
        "https://bestwebdev-demotest.s3.eu-west-2.amazonaws.com/videos/phone+drop+skateboard.mp4"
    ];
    
    return (
        <section id="video">
            <div className="h-[80vh] w-full">
                <div className="text-center py-10">
                    <h1 className="text-lg pb-1">Gallery</h1>
                    <h2 className="text-4xl  underline underline-offset-4 text-red-600">Videos</h2>
                </div>
                <div className="top-0 columns-2 md:columns-3 lg:columns-4 p-4">
                    <div className="break-inside-avoid mb-4">
                        <img className="h-auto max-w-full rounded-lg" src={getImageUrl("21.jpg")} alt="Ashton Phillips" />
                    </div>
                    <div className="break-inside-avoid mb-4">
                        <img className="h-auto max-w-full rounded-lg" src={getImageUrl("7.jpg")} alt="Ashton Phillips" />
                    </div>
                    <div className="break-inside-avoid mb-4">
                        <img className="h-auto max-w-full rounded-lg hidden md:block" src={getImageUrl("18.jpg")} alt="Ashton Phillips" />
                    </div>
                    <div className="break-inside-avoid mb-4">
                        <img className="h-auto max-w-full rounded-lg hidden md:block" src={getImageUrl("26.jpg")} alt="Ashton Phillips" />
                    </div>
                    <div className="break-inside-avoid mb-4">
                        <img className="h-auto max-w-full rounded-lg md:hidden lg:block" src={getImageUrl("25.jpg")} alt="Ashton Phillips" />
                    </div>
                    <div className="break-inside-avoid mb-4">
                        <img className="h-auto max-w-full rounded-lg" src={getImageUrl("2.jpg")} alt="Ashton Phillips" />
                    </div>
                    <div className="break-inside-avoid mb-4">
                        <img className="h-auto max-w-full rounded-lg hidden md:block" src={getImageUrl("20.jpg")} alt="Ashton Phillips" />
                    </div>
                    <div className="break-inside-avoid mb-4">
                        <img className="h-auto max-w-full rounded-lg hidden lg:block" src={getImageUrl("11.jpg")} alt="Ashton Phillips" />
                    </div>
                </div>
            </div>
        </section>
    );
};
