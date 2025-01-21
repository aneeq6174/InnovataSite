
import React from "react";
import ProjectsHeroImg from "../assets/ProjectsHeroImg.webp";

const ProjectHeader = () => {
    return (
        <section>
            <div className="Hero">
                <div className="relative h-screen w-full flex items-center justify-center">
                    <div className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
                        style={{ backgroundImage: `url(${ProjectsHeroImg})` }}>
                    </div>
                    <div className="relative z-10 text-center text-white bg-black bg-opacity-50 p-6 rounded">
                        <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">Our Projects</h1>
                        <h2 className="text-2xl md:text-3xl font-light mb-6 animate-fade-in">Showcasing Our Latest Work</h2>
                        <p className="text-lg md:text-xl animate-fade-in">
                            Explore a collection of our most innovative and impactful projects. See how we've helped clients achieve their goals through tremendous creativity.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectHeader;
