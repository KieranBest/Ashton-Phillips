import React from "react";

import { getImageUrl } from "../../utils";

export const Intro = () => {
    return (
        <section className="z-0" id="intro">
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
            <div className='absolute text-2xl sm:text-3xl md:text-5xl lg:text-7xl justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <p className='text-red-600 text-center'>I make this look good</p>
            </div>
        </section>
    );
};
