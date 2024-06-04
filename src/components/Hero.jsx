import Navbar from "./Navbar";

function Hero() {
    return (
        <header className="h-screen w-screen bg-[url('hero-background.jpg')]">
            <Navbar />
            <div className="flex justify-center h-[80%]">
                <div className="flex my-auto">
                    <div className="w-[59%] bg-[#A8C090] rounded-r-full flex gap-7 items-center py-7 pl-20" data-aos="fade-right" data-aos-duration="1500" data-aos-once="true">
                        <div>
                            <p className="text-white">Hey there! Software engineer here with a knack for developing innovative solutions to complex problems. Skilled in full-stack development and always excited to tackle new challenges. Ready to bring creative solutions to your projects!</p>
                        </div>
                        <div>
                            <img src="avatar.png" className="avatar w-[60%] rounded-full " alt="avatar" />
                        </div>
                    </div>
                    <div className="relative w-[40%]">
                        <img src="horizontal-branch.png" className="branch absolute" alt="branch" />
                        <img src="pink-flower.png" className="pink-flower5 pink w-[10%] top-[25%] left-[5%] absolute" alt="pink-flower" />
                        <img src="pink-flower.png" className="pink-flower4 pink top-[-8%] left-[15%] absolute" alt="pink-flower" />
                        <img src="pink-flower.png" className="pink-flower3 pink top-[15%] left-[42%] absolute" alt="pink-flower" />  
                        <img src="pink-flower.png" className="pink-flower2 pink w-[10%] top-[18%] left-[65%] absolute" alt="pink-flower" />
                        <img src="pink-flower.png" className="pink-flower1 pink top-[-5%] left-[78%] absolute" alt="pink-flower" />                  
                        {/* <!-- <img src="Images/horizontal-flowers.png" className="flower absolute w-[94%] left-0.5" alt=""> --> */}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Hero;
