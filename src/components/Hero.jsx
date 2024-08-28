import Navbar from "./Navbar";

function Hero() {
    return (
        <header className="h-screen w-screen bg-[url('hero-background.jpg')]">
            <Navbar />
            <div className="h-[80%] lg:block hidden">
                <div className="flex justify-center h-[80%]">
                    <div className="flex my-auto">
                        <div className="w-[59%] bg-[#A8C090] rounded-r-full flex gap-7 items-center py-7 pl-20" data-aos="fade-right" data-aos-duration="1500" data-aos-once="true">
                            <div>
                                <p className="text-white xl:text-base text-sm">Hey there! Software engineer here with a knack for developing innovative solutions to complex problems. Skilled in full-stack development and always excited to tackle new challenges. Ready to bring creative solutions to your projects!</p>
                            </div>
                            <div>
                                <img src="avatar.png" className="avatar w-[60%] rounded-full " alt="avatar" />
                            </div>
                        </div>
                        <div className="relative w-[42%]">
                            <img src="horizontal-branch.png" className="branch absolute w-full" alt="branch" />
                            <img src="pink-flower.png" className="pink-flower5 pink w-[10%] top-[25%] left-[5%] absolute" alt="pink-flower" />
                            <img src="pink-flower.png" className="pink-flower4 pink w-[22%] top-[-8%] left-[15%] absolute" alt="pink-flower" />
                            <img src="pink-flower.png" className="pink-flower3 pink top-[15%] w-[20%] left-[42%] absolute" alt="pink-flower" />  
                            <img src="pink-flower.png" className="pink-flower2 pink w-[10%] top-[18%] left-[65%] absolute" alt="pink-flower" />
                            <img src="pink-flower.png" className="pink-flower1 w-[18%] pink top-[-5%] left-[78%] absolute" alt="pink-flower" />                  
                            {/* <!-- <img src="Images/horizontal-flowers.png" className="flower absolute w-[94%] left-0.5" alt=""> --> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:hidden block mt-10">
                <div className="flex items-center sm:justify-center relative sm:h-1/2 h-screen">
                    <div className="relative flex sm:pt-0 pt-20 sm:w-full w-[95%] scale-x-[-1] md:h-0 h-full">
                        <img src="horizontal-branch.png" className="branch absolute w-full" alt="branch" />
                        {/* <img src="pink-flower.png" className="pink-flower5 pink w-[10%] top-[25%] left-[5%] absolute" alt="pink-flower" /> */}
                        <img src="pink-flower.png" className="pink-flower4 pink w-[25%] sm:top-[-8%] top-[12%] left-[15%] absolute" alt="pink-flower" />
                        <img src="pink-flower.png" className="pink-flower3 pink top-[15%] w-[30%] left-[45%] absolute" alt="pink-flower" />  
                        {/* <img src="pink-flower.png" className="pink-flower2 pink w-[10%] top-[18%] left-[65%] absolute" alt="pink-flower" /> */}
                        <img src="pink-flower.png" className="pink-flower1 w-[18%] pink sm:top-[-5%] top-[15%] left-[78%] absolute" alt="pink-flower" />                  
                        {/* <!-- <img src="Images/horizontal-flowers.png" className="flower absolute w-[94%] left-0.5" alt=""> --> */}
                    </div>
                    <div id="hero-content" className="bg-[#A8C090] sm:w-full w-[50%] rounded-2xl flex flex-col items-center gap-4 items-center py-7 px-4 sm:static absolute top-[1%] left-[25%] z-[1]" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="1000" data-aos-once="true">
                        <div className="w-[50%]">
                            <img src="avatar.png" className="avatar rounded-full " alt="avatar" />
                        </div>
                        <div>
                            <p className="text-white xl:text-base sm:text-sm text-xs text-center">Hey there! Software engineer here with a knack for developing innovative solutions to complex problems. Skilled in full-stack development and always excited to tackle new challenges. Ready to bring creative solutions to your projects!</p>
                        </div>
                    </div>
                    <div className="relative sm:w-full w-full h-full sm:pt-0 pt-20">
                        <img src="horizontal-branch.png" className="branch absolute w-full" alt="branch" />
                        {/* <img src="pink-flower.png" className="pink-flower5 pink w-[10%] top-[25%] left-[5%] absolute" alt="pink-flower" /> */}
                        <img src="pink-flower.png" className="pink-flower4 pink w-[15%] sm:top-[-8%] top-[15%] left-[15%] absolute" alt="pink-flower" />
                        <img src="pink-flower.png" className="pink-flower3 pink sm:top-[5%] top-[15%] sm:w-[32%] w-[25%] sm:left-[35%] left-[45%] absolute" alt="pink-flower" />  
                        {/* <img src="pink-flower.png" className="pink-flower2 pink w-[10%] top-[18%] left-[65%] absolute" alt="pink-flower" /> */}
                        <img src="pink-flower.png" className="pink-flower1 w-[22%] pink sm:top-[-5%] top-[15%] left-[75%] absolute" alt="pink-flower" />                  
                        {/* <!-- <img src="Images/horizontal-flowers.png" className="flower absolute w-[94%] left-0.5" alt=""> --> */}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Hero;
