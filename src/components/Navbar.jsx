function Navbar() {
    return(
        <div className="flex sm:flex-row flex-col justify-between items-center lg:mx-20 sm:mx-10 mx-2 pt-6">
            <a href="" className="name-title 2xl:text-5xl lg:text-4xl text-3xl text-[#006837]">Rachita Pradhan</a>
            <div className="navbar-icons flex 2xl:text-2xl lg:text-xl md:text-sm text-xs items-center lg:gap-2 gap-1">
                <a href="https://www.linkedin.com/in/rachita-pradhan-8a746b190/" target="_blank" className="mr-5 text-white bg-[#1DA1F2] lg:w-10 w-8 lg:h-10 h-8 flex items-center justify-center rounded-full font-medium cursor-none shadow-lg"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="https://github.com/rach-18" target="_blank" className="mr-5 text-white bg-[#222222] lg:w-10 w-8 lg:h-10 h-8 flex items-center justify-center rounded-full font-medium cursor-none shadow-lg"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.instagram.com/rachita.18/" target="_blank" className="mr-5 text-white bg-[#C13584] lg:w-10 w-8 lg:h-10 h-8 flex items-center justify-center rounded-full font-medium cursor-none shadow-lg"><i className="fa-brands fa-instagram"></i></a>
                <a 
                    href="/Rachita_Pradhan_Resume.pdf"
                    download="Rachita_Pradhan_Resume.pdf"
                    className="gap-2 bg-[#9CB076] hover:bg-[#B0C48A] items-center border-0 py-2 px-3 focus:outline-none rounded text-white mt-4 mb-3 md:mt-0 cursor-none shadow-lg">
                    <i className="fa-solid fa-file"></i> See My Resume
                </a>
            </div>
        </div>
    )
}

export default Navbar;
