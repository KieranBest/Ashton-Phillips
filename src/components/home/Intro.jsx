import React from "react";

import { getImageUrl } from "../../utils";

export const Intro = () => {
    return (
        <section className="z-0" id="intro">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 mx-">
                <div className="m-2">
                    <img className="object-cover object-top w-full h-[44vh] max-w-full rounded-lg" src={getImageUrl("21.jpg")} alt="Ashton Phillips 21" loading=" lazy" />
                </div>
                <div className="m-2">
                    <img className="object-cover object-top w-full h-[44vh] max-w-full rounded-lg" src={getImageUrl("7.jpg")} alt="Ashton Phillips 7" loading=" lazy" />
                </div>
                <div className="md:m-2">
                    <img className="object-cover object-top w-full h-[44vh] max-w-full rounded-lg hidden md:block" src={getImageUrl("18.jpg")} alt="Ashton Phillips 18" loading=" lazy" />
                </div>
                <div className="md:m-2">
                    <img className="object-cover object-top w-full h-[44vh] max-w-full rounded-lg hidden md:block" src={getImageUrl("26.jpg")} alt="Ashton Phillips 26" loading=" lazy" />
                </div>
                <div className="m-2">
                    <img className="object-cover object-top w-full h-[44vh] max-w-full rounded-lg" src={getImageUrl("25.jpg")} alt="Ashton Phillips 25" loading=" lazy" />
                </div>
                <div className="m-2">
                    <img className="object-cover object-top w-full h-[44vh] max-w-full rounded-lg" src={getImageUrl("20.jpg")} alt="Ashton Phillips 20" loading=" lazy" />
                </div>
                <div className="lg:m-2">
                    <img className="object-cover object-center w-full h-[44vh] max-w-full rounded-lg hidden lg:block " src={getImageUrl("2.jpg")} alt="Ashton Phillips 2" loading=" lazy" />
                </div>
                <div className="lg:m-2">
                    <img className="object-cover object-top w-full h-[44vh] max-w-full rounded-lg hidden lg:block" src={getImageUrl("11.jpg")} alt="Ashton Phillips 11" loading=" lazy" />
                </div>
            </div>
            <div className='absolute text-2xl sm:text-3xl md:text-5xl lg:text-7xl justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <h1 className='text-red-600 text-center text-8xl'>Ashton Phillips</h1>
            </div>
        </section>
    );
};
