import React from "react";

export const About = () => {
    return (
        <section id="about">
            <div className="flex items-center justify-center h-[40vh] w-full">
                <div className="text-center">
                    <div className="py-10">
                        <h1 className="text-4xl underline underline-offset-4 pb-1 text-red-600">About Me</h1>
                        <h2 className="text-lg">Who I Am</h2>
                    </div>
                    <p className="text-xl">This is who I am</p>
                </div>
            </div>
        </section>
    );
}