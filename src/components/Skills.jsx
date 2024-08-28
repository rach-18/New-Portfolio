function Skills() {
    return (
        <div className="overflow-x-hidden">
             <div id="skills-signboard" data-aos="fade-down" data-aos-duration="1500" data-aos-once="true">
                <div>
                    <div className="relative flex justify-center">
                        <div id="rope-clip" className="flex gap-[4rem] absolute top-[-1.8rem] z-[-1]">
                            <img src="rope.png" alt="" />
                            <img className="scale-x-[-1]" src="rope.png" alt="" />
                        </div>
                        <p className="bg-[#F0C0A9] text-white inline px-8 py-2 text-xl rounded-full absolute top-[3rem] z-[-2] text-center">SKILLS</p>
                    </div>
                </div>
            </div>
            <div id="skills" className="bg-[#C8DDCC] h-screen relative z-[-5] overflow-x-hidden">
                <img className="absolute bottom-0 w-full h-[45%]" src="grass.png" alt="grass" />
                <img className="cloud absolute left-[-25%] top-[5%]" src="cloud1.png" alt="cloud1" />
                <img className="cloud absolute left-[-25%] top-[20%]" src="cloud2.png" alt="cloud2" />
                <img className="cloud absolute left-[-25%] top-[5%]" src="cloud3.png" alt="cloud3" />
                <img className="cloud absolute w-[20%] left-[-25%] top-[15%]" src="cloud4.png" alt="cloud4" />
                <img className="cloud absolute left-[-25%] top-[6%]" src="cloud2.png" alt="cloud5" />
                <div className="flex flex-wrap justify-evenly items-end h-full relative z-10 lg:py-20 sm:py-14 py-5 px-5">
                    <div className="flex flex-col items-center" data-aos="fade-up" data-aos-once="true" data-aos-duration="1200">
                        <img className="2xl:w-[65%] lg:w-[55%] w-[35%]" src="HTML-skill.png" alt="" />
                        <p className="font-semibold lg:text-base text-xs text-[#006837]">HMTL</p>
                    </div>
                    <div className="flex flex-col items-center" data-aos="fade-up" data-aos-once="true" data-aos-duration="1200" data-aos-delay="500">
                        <img className="2xl:w-[65%] lg:w-[55%] w-[35%]" src="CSS-skill.png" alt="" />
                        <p className="font-semibold lg:text-base text-xs text-[#006837]">CSS</p>
                    </div>
                    <div className="flex flex-col items-center" data-aos="fade-up" data-aos-once="true" data-aos-duration="1200" data-aos-delay="1000">
                        <img className="2xl:w-[65%] lg:w-[55%] w-[35%]" src="Javascript-skill.png" alt="" />
                        <p className="font-semibold lg:text-base text-xs text-[#006837]">JAVASCRIPT</p>
                    </div>
                    <div className="flex flex-col items-center" data-aos="fade-up" data-aos-once="true" data-aos-duration="1200" data-aos-delay="1500">
                        <img className="2xl:w-[65%] lg:w-[55%] w-[35%]" src="Java-skill.png" alt="" />
                        <p className="font-semibold lg:text-base text-xs text-[#006837]">JAVA</p>
                    </div>
                    <div className="flex flex-col items-center" data-aos="fade-up" data-aos-once="true" data-aos-duration="1200" data-aos-delay="2000">
                        <img className="2xl:w-[65%] lg:w-[55%] w-[35%]" src="React-skill.png" alt="" />
                        <p className="font-semibold lg:text-base text-xs text-[#006837]">REACT</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;
