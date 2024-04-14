import React from "react";

import { getImageUrl } from "../../utils";
import YoutubeEmbed from "./YoutubeEmbed";

export const Gallery = () => {
    return (
        <section id="gallery">
            <div className="w-full px-4 pt-20">
                <div className="text-center py-10">
                    <h1 className="">Gallery</h1>
                    <h2 className="text-4xl  underline underline-offset-4 text-red-600">Photos</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                    <div className="m-2">
                        <img className="object-cover object-top w-full h-[44vh] max-w-full rounded-lg" src={getImageUrl("28.jpg")} alt="Ashton Phillips 28" loading=" lazy" />
                    </div>
                    <div className="m-2">
                        <img className="object-cover object-center w-full h-[44vh] max-w-full rounded-lg" src={getImageUrl("32.jpg")} alt="Ashton Phillips 32" loading=" lazy" />
                    </div>
                    <div className="md:m-2">
                        <img className="object-cover object-top w-full h-[44vh] max-w-full rounded-lg hidden md:block" src={getImageUrl("4.jpg")} alt="Ashton Phillips 4" loading=" lazy" />
                    </div>
                    <div className="md:m-2">
                        <img className="object-cover object-top lg:object-center w-full h-[44vh] max-w-full rounded-lg hidden md:block" src={getImageUrl("30.jpg")} alt="Ashton Phillips 30" loading=" lazy" />
                    </div>
                    <div className="m-2">
                        <img className="object-cover object-center w-full h-[44vh] max-w-full rounded-lg" src={getImageUrl("29.jpg")} alt="Ashton Phillips 29" loading=" lazy" />
                    </div>
                    <div className="m-2">
                        <img className="object-cover object-top w-full h-[44vh] max-w-full rounded-lg" src={getImageUrl("40.jpg")} alt="Ashton Phillips 40" loading=" lazy" />
                    </div>
                    <div className="lg:m-2">
                        <img className="object-cover object-left w-full h-[44vh] max-w-full rounded-lg hidden lg:block" src={getImageUrl("42.jpg")} alt="Ashton Phillips 42" loading=" lazy" />
                    </div>
                    <div className="lg:m-2">
                        <img className="object-cover object-top w-full h-[44vh] max-w-full rounded-lg hidden lg:block" src={getImageUrl("41.jpg")} alt="Ashton Phillips 41" loading=" lazy" />
                    </div>
                </div>

                <div className="text-center py-10">
                    <h2 className="text-4xl  underline underline-offset-4 text-red-600">Videos</h2>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                        <YoutubeEmbed embedId="MtN1YnoL46Q" />
                    </div>
                    <div>
                        <YoutubeEmbed embedId="XqZsoesa55w" />
                    </div>                
                </div>
            </div>
        </section>
    );
};
