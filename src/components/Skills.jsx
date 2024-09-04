import { useRef, useState, useEffect } from "react";

function Skills() {
    const containerRef = useRef(null);
    const [centerSlideIndex, setCenterSlideIndex] = useState(0);
    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

    const slides = [
        { src: "React-skill.png", label: "REACT" },
        { src: "Javascript-skill.png", label: "JAVASCRIPT" },
        { src: "HTML-skill.png", label: "HTML" },
        { src: "CSS-skill.png", label: "CSS" },
        { src: "Java-skill.png", label: "JAVA" },
        { src: "Redux-skill.png", label: "REDUX" },
        { src: "Tailwind-skill.png", label: "TAILWIND" },
        { src: "Bootstrap-skill.png", label: "BOOTSTRAP" },
        { src: "Adobe-Illustrator-skill.png", label: "ADOBE ILLUSTRATOR" },
        { src: "Adobe-Photoshop-skill.png", label: "ADOBE PHOTOSHOP" }
    ];

    return (
        <div className="overflow-x-hidden">
            <div id="skills-signboard" data-aos="fade-down" data-aos-duration="1500" data-aos-once="true">
                <div>
                    <div className="relative flex justify-center">
                        <div id="rope-clip" className="flex lg:gap-[4rem] gap-[3.5rem] absolute top-[-1.8rem] z-[-1]">
                            <img src="rope.png" alt="" />
                            <img className="scale-x-[-1]" src="rope.png" alt="" />
                        </div>
                        <p className="bg-[#F0C0A9] text-white inline px-8 py-2 lg:text-xl text-base rounded-full absolute top-[3rem] z-[-2] text-center">SKILLS</p>
                    </div>
                </div>
            </div>
            <div className="relative">
                <div id="skills" className="bg-[#C8DDCC] sm:h-screen h-[72vh] relative z-[-5] overflow-x-hidden">
                    <img className="absolute bottom-0 w-full h-[45%] object-cover" src="grass.png" alt="grass" />
                    <img className="cloud cloud-1 absolute left-[-25%] top-[5%]" src="cloud1.png" alt="cloud1" />
                    <img className="cloud cloud-2 absolute left-[-25%] top-[20%]" src="cloud2.png" alt="cloud2" />
                    <img className="cloud cloud-3 absolute left-[-25%] top-[5%]" src="cloud3.png" alt="cloud3" />
                    <img className="cloud cloud-4 absolute w-[20%] left-[-25%] top-[15%]" src="cloud4.png" alt="cloud4" />
                    <img className="cloud cloud-5 absolute left-[-25%] top-[6%]" src="cloud2.png" alt="cloud5" />
                </div>
                <div className="absolute z-10 bottom-16 w-full lg:px-20 sm:px-14 px-10 flex items-center justify-center">
                    {/* <button className="prev-btn pr-10" onClick={handlePrevClick}>Prev</button> */}
                    <div 
                        className="carousel scrollbar flex lg:gap-28 sm:gap-20 gap-[3rem] pb-5 items-end w-full snap-x snap-mandatory gap-4 overflow-x-scroll scroll-smooth"
                    >
                        {slides.map((slide, index) => (
                            <div key={index} className="flower-div relative xl:w-[7.5%] md:w-[9%] sm:w-[12%] w-[14%] shrink-0 rounded-xl ">
                                <div className="flex flex-col items-center">
                                    <img className="" src={slide.src} alt={slide.label} />
                                    <p className="font-semibold lg:text-base text-xs text-[#006837] text-center">{slide.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <div className="pagination my-4 flex gap-2">
                        {Array(totalSlides - 2).fill().map((_, index) => (
                            <span
                                key={index}
                                className={`h-3 w-3 ease-out duration-300 rounded-full bg-black ${centerSlideIndex === index ? "w-8" : ""}`}
                            ></span>
                        ))}
                    </div> */}
                    {/* <button className="prev-btn" onClick={handlePrevClick}>Prev</button> */}
                    {/* <button className="next-btn pl-10" onClick={handleNextClick}>Next</button> */}
                </div>
            </div>
        </div>
    )
}

export default Skills;
