import React from "react";

import { getImageUrl } from "../../utils";
import YoutubeEmbed from "./YoutubeEmbed";

export const Gallery = () => {
    return (
        <section id="gallery">
            <div className="w-full px-4 pt-10">
                <div className="text-center py-10">
                    <h1 className="">Gallery</h1>
                    <h2 className="text-4xl  underline underline-offset-4 text-red-600">Photos</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                    <div>
                        <img className="object-cover object-top w-full h-[44vh] max-w-full rounded-lg m-2" src={getImageUrl("28.jpg")} alt="Ashton Phillips" />
                    </div>
                    <div>
                        <img className="object-cover object-center w-full h-[44vh] max-w-full rounded-lg m-2" src={getImageUrl("32.jpg")} alt="Ashton Phillips" />
                    </div>
                    <div>
                        <img className="object-cover object-top w-full h-[44vh] max-w-full rounded-lg hidden md:block md:m-2" src={getImageUrl("44.jpg")} alt="Ashton Phillips" />
                    </div>
                    <div>
                        <img className="object-cover object-top lg:object-center w-full h-[44vh] max-w-full rounded-lg hidden md:block md:m-2" src={getImageUrl("30.jpg")} alt="Ashton Phillips" />
                    </div>
                    <div>
                        <img className="object-cover object-top w-full h-[44vh] max-w-full rounded-lg m-2" src={getImageUrl("39.jpg")} alt="Ashton Phillips" />
                    </div>
                    <div>
                        <img className="object-cover object-top w-full h-[44vh] max-w-full rounded-lg m-2" src={getImageUrl("40.jpg")} alt="Ashton Phillips" />
                    </div>
                    <div>
                        <img className="object-cover object-left w-full h-[44vh] max-w-full rounded-lg hidden lg:block lg:m-2" src={getImageUrl("42.jpg")} alt="Ashton Phillips" />
                    </div>
                    <div>
                        <img className="object-cover object-top w-full h-[44vh] max-w-full rounded-lg hidden lg:block lg:m-2" src={getImageUrl("41.jpg")} alt="Ashton Phillips" />
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
