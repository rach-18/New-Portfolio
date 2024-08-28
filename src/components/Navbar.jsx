function Navbar() {
    return(
        <div className="flex justify-between items-center lg:mx-20 sm:mx-10 mx-2 pt-6">
            <a href="" className="name-title sm:text-3xl text-xl text-[#006837]">Rachita Pradhan</a>
            <div className="flex items-center lg:gap-2 gap-1">
                <a href="https://www.linkedin.com/in/rachita-pradhan-8a746b190/" target="_blank" className="mr-5 text-white bg-[#1DA1F2] w-8 h-8 flex items-center justify-center rounded-full font-medium  cursor-pointer lg:text-base text-sm"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="https://github.com/rach-18" target="_blank" className="mr-5 text-white bg-[#222222] w-8 h-8 flex items-center justify-center rounded-full font-medium cursor-pointer lg:text-base text-sm"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.instagram.com/rachita.18/" target="_blank" className="mr-5 text-white bg-[#C13584] w-8 h-8 flex items-center justify-center rounded-full font-medium cursor-pointer lg:text-base text-sm"><i className="fa-brands fa-instagram"></i></a>
                <button className="gap-2 bg-[#9CB076] hover:bg-[#B0C48A] items-center border-0 py-2 px-3 focus:outline-none rounded text-white mt-4 md:mt-0 cursor-pointer lg:text-base text-sm"><i className="fa-solid fa-file"></i> See My Resume</button>
            </div>
        </div>
        // <div className="text-gray-600 body-font">
        //     <div className="container mx-auto flex justtify-between items-center p-5 items-center">
        //         <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        //             <span className="name-title text-3xl text-[#006837] ml-3">Rachita Pradhan</span>
        //         </a>
        //         <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        //             <a href="https://www.linkedin.com/in/rachita-pradhan-8a746b190/" target="_blank" className="mr-5 text-white bg-[#1DA1F2] w-8 h-8 flex items-center justify-center rounded-full font-medium cursor-pointer"><i className="fa-brands fa-linkedin-in"></i></a>
        //             <a href="https://github.com/rach-18" target="_blank" className="mr-5 text-white bg-[#222222] w-8 h-8 flex items-center justify-center rounded-full font-medium cursor-pointer"><i className="fa-brands fa-github"></i></a>
        //             <a href="https://www.instagram.com/rachita.18/" target="_blank" className="mr-5 text-white bg-[#C13584] w-8 h-8 flex items-center justify-center rounded-full font-medium cursor-pointer"><i className="fa-brands fa-instagram"></i></a>
        //         </nav>
        //         <a href="" className="inline-flex gap-2 bg-[#9CB076] hover:bg-[#B0C48A] items-center border-0 py-2 px-3 focus:outline-none rounded text-white mt-4 md:mt-0 cursor-pointer"><i className="fa-solid fa-file"></i> See My Resume</a>
        //     </div>
        // </div>
    )
}

export default Navbar;
