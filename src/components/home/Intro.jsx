import React from "react";

import { getImageUrl } from "../../utils";

export const Intro = () => {
    return (
        <section className="">
            <div className="h-[90vh] grid grid-cols-2 md:grid-cols-4 gap-4 z-10">
                <div className="grid gap-4 sm:gap-6 md:gap-10">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={getImageUrl("21.jpg")} alt="Ashton Phillips" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={getImageUrl("7.jpg")} alt="Ashton Phillips" />
                    </div>
                </div>
                <div className="grid gap-4 sm:gap-6 md:gap-10">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={getImageUrl("18.jpg")} alt="Ashton Phillips" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={getImageUrl("26.jpg")} alt="Ashton Phillips" />
                    </div>
                </div>
                <div className='absolute text-2xl sm:text-4xl md:text-9xl text-white justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <p className='text-red-700 text-center'>I make this look good</p>
                </div>
                <div className="md:grid gap-4 sm:gap-6 md:gap-10">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={getImageUrl("25.jpg")} alt="Ashton Phillips" />
                    </div>
                    <div>
                        <img className="hidden md:block h-auto max-w-full rounded-lg" src={getImageUrl("2.jpg")} alt="Ashton Phillips" />
                    </div>
                </div>
                <div className="md:grid gap-4 sm:gap-6 md:gap-10">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={getImageUrl("20.jpg")} alt="Ashton Phillips" />
                    </div>
                    <div>
                        <img className="hidden md:block h-auto max-w-full rounded-lg" src={getImageUrl("3.jpg")} alt="Ashton Phillips" />
                    </div>
                </div>
            </div>
        </section>
    );
}