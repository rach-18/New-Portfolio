import React, { useState } from 'react';
import '../App.css';

function About() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const exp = [
        {
            "content" : 
            <div className="slide" key={0}>
                <p className='text-4xl font-bold mb-2'>Keysight Technologies</p>
                <div className='flex justify-between text-2xl font-semibold'>
                    <p>Research and Development Intern</p>
                    <p>Jan 2023 - Jul 2023</p>
                </div>
                <div className='flex gap-2 items-center my-2 text-sm'>
                    <i className="fa-solid fa-location-dot"></i>
                    <p>Kolkata, India</p>
                </div>
                {/* <p className='text-xl underline'>Description:</p> */}
                <ul className='list-disc ml-8 mt-3 flex flex-col gap-2'>
                    <li>Improved the functionality of IxNetwork Web Edition by collaborating with a team of 5 to
                    optimize the network. monitoring tool.</li>
                    <li>Conducted manual debugging of over 200 test cases, resolving software issues for smooth
                    functionality and optimal performance.</li>
                    <li>Documented project changes and updates in team manuals, providing valuable insights for
                    future development.</li>
                </ul>
            </div>,
            "logo" : "https://imgs.search.brave.com/OuLcTXVvhQTDJcSdjiLBemZOxHs4KC5IXZUKX54eNbk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb21w/YW5pZXNsb2dvLmNv/bS9pbWcvb3JpZy9L/RVlTLTE4YTM0NjY5/LnBuZz90PTE2NDg1/NzIyMTk"
        },
        {
            "content" : 
            <div className="slide" key={1}>
                <p className='text-4xl font-bold mb-2'>Variable Energy Cylotron Center (VECC)</p>
                <div className='flex justify-between text-2xl font-semibold'>
                    <p>Web Development Intern</p>
                    <p>Jun 2022 - Jul 2022</p>
                </div>
                <div className='flex gap-2 items-center my-2 text-sm'>
                    <i className="fa-solid fa-location-dot"></i>
                    <p>Kolkata, India</p>
                </div>
                {/* <p className='text-xl underline'>Description:</p> */}
                <ul className='list-disc ml-8 mt-3 flex flex-col gap-2'>
                    <li>Revamped the organization's recruitment page to improve user experience and responsiveness.</li>
                    <li>Leveraged HTML, CSS, and Bootstrap to redesign the portal, resulting in a modern and user-friendly interface.</li>
                    <li>Ensured the website's responsiveness for multiple devices, enhancing accessibility for candidates.</li>
                </ul>
            </div>,
            "logo" : "https://imgs.search.brave.com/wjrwXF_FsEXZQ8uuZVTXKGm-BhMmgUQRI9LhdCmNP3A/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/Ni82NS9WYXJpYWJs/ZV9FbmVyZ3lfQ3lj/bG90cm9uX0NlbnRy/ZS5zdmcvMjIwcHgt/VmFyaWFibGVfRW5l/cmd5X0N5Y2xvdHJv/bl9DZW50cmUuc3Zn/LnBuZw"
        }
    ]

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % exp.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + exp.length) % exp.length);
    };

    return (
        <div id="about-me">
            <div id="about-signboard" data-aos="fade-down" data-aos-duration="1200" data-aos-once="true">
                <div>
                    <div className="relative flex justify-center">
                        <div id='rope-clip' className="flex gap-[5rem] absolute top-[-1.8rem] z-[2]">
                            <img src="rope.png" alt="rope" />
                            <img className="scale-x-[-1]" src="rope.png" alt="rope" />
                        </div>
                        <p className="bg-[#F0C0A9] text-white inline px-8 py-2 text-xl rounded-full absolute top-[3rem] z-[1] text-center">ABOUT ME</p>
                    </div>
                </div>
            </div>
            <div className="flex gap-20 my-32 mx-28 items-center justify-center w-full">
                <div className="flex items-center" data-aos="fade-right" data-aos-duration="1200" data-aos-once="true">
                    <p className="bg-[#A8C090] p-10 rounded-2xl text-white text-lg">I graduated in 2023 with a degree in software engineering and have completed two internships focused on full-stack development. Passionate about coding and continuously learning new technologies, I am eager to start my professional career and contribute to impactful projects.</p>
                    <div id="message-pointer" className="bg-[#A8C090] w-[20rem] h-[4rem]"></div>
                </div>
                <div className="w-full" data-aos="fade-left" data-aos-duration="1200" data-aos-once="true">
                    <img className="w-[45%] rounded-full" src="avatar.png" alt="avatar" />
                </div>
            </div>
            <div id="experience" className="h-screen relative bg-[url(experience-bg.png)]">
                <div className="flex items-center justify-center">
                    <p className="bg-[#006837] mt-8 px-4 py-2 rounded-full text-white text-xl">EXPERIENCE</p>
                </div>
                <div className="flex flex-col justify-around">
                    <div className="mx-auto w-[80%] text-lg my-5">
                        <div className="carousel-content text-lime-950">
                            {exp[currentIndex].content}
                        </div>
                    </div>
                    <div id="carousel" className="flex items-end justify-center text-lg py-5 absolute bottom-0 w-full">
                        <div className="flex items-center justify-evenly w-full">
                            <div onClick={prevSlide} className="bg-white w-[5rem] h-[5rem] flex items-center justify-center rounded-full shadow-xl cursor-pointer hover:opacity-60">
                                <i className="fa-solid fa-arrow-left"></i>
                            </div>
                            <div className="bg-white w-[7.5rem] h-[7.5rem] flex items-center justify-center rounded-full text-center shadow-xl">
                                {/* <p>{exp[currentIndex].logo}</p> */}
                                <img className='w-[80%]' src={exp[currentIndex].logo} alt="" />
                            </div>
                            <div onClick={nextSlide} className="bg-white w-[5rem] h-[5rem] flex items-center justify-center rounded-full shadow-xl cursor-pointer hover:opacity-60">
                                <i className="fa-solid fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;




// function About() {
//     return (
//         <div id="about-me">
//             <div id="about-signboard">
//                 <div>
//                     <div class="relative flex justify-center">
//                         <div class="flex gap-[5rem] absolute top-[-1.8rem] z-[2]">
//                             <img src="rope.png" alt="" />
//                             <img class="scale-x-[-1]" src="rope.png" alt="" />
//                         </div>
//                         <p class="bg-[#F0C0A9] text-white inline px-8 py-2 text-xl rounded-full absolute top-[3rem] z-[1] text-center">ABOUT ME</p>
//                     </div>
//                 </div>
//             </div>
//             <div id="about-me">
//                 <div class="flex gap-20 my-32 mx-28 items-center justify-center w-full">
//                     <div class="flex items-center">
//                         <p class="bg-[#A8C090] p-10 rounded-2xl text-white text-lg">I graduated in 2023 with a degree in software engineering and have completed two internships focused on full-stack development. Passionate about coding and continuously learning new technologies, I am eager to start my professional career and contribute to impactful projects.</p>
//                         <div id="message-pointer" class="bg-[#A8C090] w-[20rem] h-[4rem]"></div>
//                     </div>
//                     <div class="w-full">
//                         <img class="w-[45%] rounded-full" src="avatar.png" alt="" />
//                     </div>
//                 </div>
//                 <div id="experience" class="h-screen">
//                     <div class="flex items-center justify-center">
//                         <p class="bg-[#006837] mt-8 px-4 py-2 rounded-full text-white text-xl">EXPERIENCE</p>
//                     </div>
//                     <div class="flex flex-col justify-around">
//                         <div class="mx-auto w-[80%] text-lg my-12">
//                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eveniet consectetur ea eos ratione quisquam earum, aliquid ipsum nisi aperiam, atque in sequi perspiciatis aspernatur voluptate quidem sunt neque ab maxime porro! Itaque in minima iste, quo culpa, animi, temporibus quam hic numquam quae beatae dignissimos odit dolor velit provident qui exercitationem ipsam ullam sed. Quasi doloribus recusandae omnis quaerat, id similique facilis laboriosam. Quas, eum a corrupti nam voluptatibus cumque odio quae mollitia enim dicta excepturi nisi esse praesentium!</p>
//                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eveniet consectetur ea eos ratione quisquam earum, aliquid ipsum nisi aperiam, atque in sequi perspiciatis aspernatur voluptate quidem sunt neque ab maxime porro! Itaque in minima iste, quo culpa, animi, temporibus quam hic numquam quae beatae dignissimos odit dolor velit provident qui exercitationem ipsam ullam sed. Quasi doloribus recusandae omnis quaerat, id similique facilis laboriosam. Quas, eum a corrupti nam voluptatibus cumque odio quae mollitia enim dicta excepturi nisi esse praesentium!</p>
//                         </div>
//                         <div id="carousel" class="flex items-end justify-center text-lg py-5">
//                             <div class="flex items-center justify-evenly w-full">
//                                 <div id="arrows" class="bg-white w-[5rem] h-[5rem] flex items-center justify-center rounded-full shadow-xl cursor-pointer hover:opacity-60">
//                                     <i class="fa-solid fa-arrow-left"></i>
//                                 </div>
//                                 <div class="bg-white w-[7.5rem] h-[7.5rem] flex items-center justify-center rounded-full text-center shadow-xl">
//                                     <p>COMPANY LOGO</p>
//                                 </div>
//                                 <div id="arrows" class="bg-white w-[5rem] h-[5rem] flex items-center justify-center rounded-full shadow-xl cursor-pointer hover:opacity-60">
//                                     <i class="fa-solid fa-arrow-right"></i>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default About;
