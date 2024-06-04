function Projects() {
    return (
        <div id="projects">
            <div id="projects-signboard" data-aos="fade-down" data-aos-once="true" data-aos-duration="1500">
                <div>
                    <div className="relative flex justify-center">
                        <div id="rope-clip" className="flex gap-[6rem] absolute top-[-1.8rem] z-[2]">
                            <img src="rope.png" alt="" />
                            <img className="scale-x-[-1]" src="rope.png" alt="" />
                        </div>
                        <p className="bg-[#F0C0A9] text-white inline px-8 py-2 text-xl rounded-full absolute top-[3rem] z-[1] text-center">PROJECTS</p>
                    </div>
                </div>
            </div>
            <div id="projects" className="mt-40 mx-20 pb-32">
                <div className="flex flex-col gap-10">
                    <div className="flex items-center gap-10 bg-[#A8C090] py-10 px-12 rounded-[2.5rem]" data-aos="zoom-in" data-aos-duration="1500">
                        <div className="w-[40%]">
                            <img className="" src="Umatter-project.png" alt="Loreal Logo" />
                        </div>
                        <div className="flex flex-col gap-5 w-full">
                            <p className="text-[#006837]">UMatter is a meditation website designed to help users find peace and mindfulness. Featuring guided meditations and relaxation techniques, this project demonstrates skills in web development and a commitment to promoting mental well-being.</p>
                            <div className="flex items-center gap-2">
                                <a href="https://github.com/rach-18/MCT-U-Matter/tree/main" target='_blank' className="bg-white p-2 rounded-lg font-semibold text-[#006837] hover:shadow-lg github-repo"><i className="fa-brands fa-github"></i> Github</a>
                                <a className="text-white" target='_blank' href="https://rach-18.github.io/MCT-U-Matter">Click here to visit the live project!</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-10 bg-[#A8C090] py-10 px-12 rounded-[2.5rem]" data-aos="zoom-in" data-aos-duration="1500">
                        <div className="w-[40%]">
                            <img className="" src="Crypto-project.png" alt="Loreal Logo" />
                        </div>
                        <div className="flex flex-col gap-5 w-full">
                            <p className="text-[#006837]">Crypto View offers the latest real-time updates and insights on the current state of the cryptocurrency market, ensuring you stay informed about the latest trends and data in digital currencies. Easily access detailed information to make well-informed decisions in the fast-paced world of crypto.</p>
                            <div className="flex items-center gap-2">
                                <a href="https://github.com/rach-18/Crypto-Search-App" target='_blank' className="bg-white p-2 rounded-lg font-semibold text-[#006837] hover:shadow-lg github-repo"><i className="fa-brands fa-github"></i> Github</a>
                                <a className="text-white" target='_blank' href="https://crypto-search-app-ashen.vercel.app/">Click here to visit the live project!</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-10 bg-[#A8C090] py-10 px-12 rounded-[2.5rem]" data-aos="zoom-in" data-aos-duration="1500">
                        <div className="w-[40%]">
                            <img className="" src="Loreal-project.png" alt="Loreal Logo" />
                        </div>
                        <div className="flex flex-col gap-5 w-full">
                            <p className="text-[#006837]">Created a detailed front-end clone of the official L'Oréal website, replicating its design and user experience. This project highlights advanced web development skills and attention to detail in recreating a visually appealing and user-friendly interface.</p>
                            <div className="flex items-center gap-2">
                                <a href="https://github.com/rach-18/Loreal" target='_blank' className="bg-white p-2 rounded-lg font-semibold text-[#006837] hover:shadow-lg github-repo"><i className="fa-brands fa-github"></i> Github</a>
                                <a className="text-white" target='_blank' href="https://rach-18.github.io/Loreal/">Click here to visit the live project!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
