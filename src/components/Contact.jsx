function Contact() {
    return (
        <div id="contact-me" className="bg-[url('hero-background.jpg')]">
            <div id="contact-signboard" data-aos="fade-down" data-aos-duration="1500" data-aos-once="true">
                <div>
                    <div className="relative flex justify-center">
                        <div className="flex lg:gap-[6rem] gap-[5rem] absolute top-[-1.8rem] z-[2]">
                            <img id="rope-clip" src="rope.png" alt="" />
                            <img id="rope-clip" className="scale-x-[-1]" src="rope.png" alt="" />
                        </div>
                        <p className="bg-[#F0C0A9] text-white inline px-8 py-2 2xl:text-2xl lg:text-xl text-base rounded-full absolute top-[3rem] z-[1] text-center">CONTACT ME</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex flex-col gap-5 items-center justify-center pt-32">
                    <img className="profile-pic lg:w-[12%] md:w-[18%] sm:w-[20%] w-[26%] rounded-full shadow-lg" src="me.jpeg" alt="" />
                    <p className="bg-white sm:text-xl text-lg px-6 py-2 rounded-full">Let's Connect!</p>
                </div>
                <form action="" className="flex flex-col pb-10 sm:pt-10 pt-8 w-5/6 mx-auto sm:gap-5 gap-3">
                    <input className="sm:p-4 p-3 rounded-lg shadow-md" type="text" placeholder="Name..." />
                    <input className="sm:p-4 p-3 rounded-lg shadow-md" type="text" placeholder="Email..." />
                    <textarea className="sm:p-4 p-3 rounded-lg shadow-md" rows="5" placeholder="Message..."></textarea>
                    <button id="submit-btn" className="bg-[#A8C090] hover:bg-[#B7CFAF] text-white sm:text-xl font-bold sm:w-[20%] w-[25%] mx-auto py-3 rounded-lg" type="submit">SUBMIT</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;
