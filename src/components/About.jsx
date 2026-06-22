import React, { useState } from "react";
import "../App.css";

function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const exp = [
    {
      content: (
        <div className="slide" key={0}>
          <p className="2xl:text-5xl lg:text-4xl sm:text-2xl sm:text-left text-center text-xl font-bold mb-2">
            Osfin.ai
          </p>
          <div className="flex sm:justify-between items-center sm:flex-row flex-col 2xl:text-4xl lg:text-2xl sm:text-xl text-base font-semibold">
            <p>Software Developer</p>
            <p>Feb 2025 - Present</p>
          </div>
          <div className="flex gap-2 items-center my-2 2xl:text-xl sm:text-sm text-xs">
            <i className="fa-solid fa-location-dot"></i>
            <p>Bengaluru, India</p>
          </div>
          {/* <p className='text-xl underline'>Description:</p> */}
          <ul className="list-disc ml-8 mt-3 flex flex-col gap-2 2xl:text-2xl sm:text-base text-sm">
            <li>
              Built a React + TypeScript design system with 20+ components (OTP
              inputs, alerts, badges, menus, charts), design tokens, Storybook
              docs, and multi-tenant theming, adopted across the product to keep
              UI consistent.
            </li>
            <li>
              Built core reconciliation workflows from scratch, including
              kanban-style boards for file ingestion, recon, GL, and fund
              movement, with file upload/retry flows and live status polling.
            </li>
            <li>
              Built an in-app AI assistant with real-time WebSocket streaming,
              markdown rendering, and session management which won 1st Runner-Up
              at an internal hackathon for helping implementation teams
              self-resolve server config issues.
            </li>
          </ul>
        </div>
      ),
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ77NyTc1W5qXwLC5ZBK9lQzczmjmsDuGDTbMvhGZ5Xw&s=10",
    },
    {
      content: (
        <div className="slide" key={1}>
          <p className="2xl:text-5xl lg:text-4xl sm:text-2xl sm:text-left text-center text-xl font-bold mb-2">
            IEMA Research and Development Pvt. Ltd.
          </p>
          <div className="flex sm:justify-between items-center sm:flex-row flex-col 2xl:text-4xl lg:text-2xl sm:text-xl text-base font-semibold">
            <p>Web Development Intern</p>
            <p>Jan 2025 - Feb 2025</p>
          </div>
          <div className="flex gap-2 items-center my-2 2xl:text-xl sm:text-sm text-xs">
            <i className="fa-solid fa-location-dot"></i>
            <p>Kolkata, India</p>
          </div>
          {/* <p className='text-xl underline'>Description:</p> */}
          <ul className="list-disc ml-8 mt-3 flex flex-col gap-2 2xl:text-2xl sm:text-base text-sm">
            {/* <li>Revamped the organization's recruitment page to improve user experience and responsiveness.</li>
                    <li>Leveraged HTML, CSS, and Bootstrap to redesign the portal, resulting in a modern and user-friendly interface.</li>
                    <li>Ensured the website's responsiveness for multiple devices, enhancing accessibility for candidates.</li> */}
            <li>
              Developing an ETL solution using React and Flux, creating dynamic
              interfaces and ensuring seamless data flow to enhance data
              processing performance and scalability.
            </li>
            <li>
              Designed a responsive webpage for the company’s service website
              using Figma, enhancing user experience and branding, resulting in
              a modern interface that increased engagement.
            </li>
          </ul>
        </div>
      ),
      logo: "https://media.licdn.com/dms/image/v2/C560BAQG2ma0bMsTDDQ/company-logo_200_200/company-logo_200_200/0/1630648669654/iemaiemlabs_logo?e=1783555200&v=beta&t=8dQVOpHGc218WMTVdHEc3viUNxlVD_e8cMWCvxPrFt8",
    },
    {
      content: (
        <div className="slide" key={0}>
          <p className="2xl:text-5xl lg:text-4xl sm:text-2xl sm:text-left text-center text-xl font-bold mb-2">
            Keysight Technologies
          </p>
          <div className="flex sm:justify-between items-center sm:flex-row flex-col 2xl:text-4xl lg:text-2xl sm:text-xl text-base font-semibold">
            <p>Research and Development Intern</p>
            <p>Jan 2023 - Jul 2023</p>
          </div>
          <div className="flex gap-2 items-center my-2 2xl:text-xl sm:text-sm text-xs">
            <i className="fa-solid fa-location-dot"></i>
            <p>Kolkata, India</p>
          </div>
          {/* <p className='text-xl underline'>Description:</p> */}
          <ul className="list-disc ml-8 mt-3 flex flex-col gap-2 2xl:text-2xl sm:text-base text-sm">
            {/* <li>Improved the functionality of IxNetwork Web Edition by collaborating with a team of 5 to
                    optimize the network. monitoring tool.</li>
                    <li>Conducted manual debugging of over 200 test cases, resolving software issues for smooth
                    functionality and optimal performance.</li>
                    <li>Documented project changes and updates in team manuals, providing valuable insights for
                    future development.</li> */}
            <li>
              Integrated new features into React components, including advanced
              state management and conditional rendering, reducing feature
              implementation time by 20%.
            </li>
            <li>
              Assisted in manually debugging 50+ test cases, leading to the
              identification and resolution of software issues, significantly
              improving code quality and application performance.
            </li>
          </ul>
        </div>
      ),
      logo: "https://imgs.search.brave.com/OuLcTXVvhQTDJcSdjiLBemZOxHs4KC5IXZUKX54eNbk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb21w/YW5pZXNsb2dvLmNv/bS9pbWcvb3JpZy9L/RVlTLTE4YTM0NjY5/LnBuZz90PTE2NDg1/NzIyMTk",
    },
    {
      content: (
        <div className="slide" key={1}>
          <p className="2xl:text-5xl lg:text-4xl sm:text-2xl sm:text-left text-center text-xl font-bold mb-2">
            Variable Energy Cylotron Center (VECC)
          </p>
          <div className="flex sm:justify-between items-center sm:flex-row flex-col 2xl:text-4xl lg:text-2xl sm:text-xl text-base font-semibold">
            <p>Web Development Intern</p>
            <p>Jun 2022 - Jul 2022</p>
          </div>
          <div className="flex gap-2 items-center my-2 2xl:text-xl sm:text-sm text-xs">
            <i className="fa-solid fa-location-dot"></i>
            <p>Kolkata, India</p>
          </div>
          {/* <p className='text-xl underline'>Description:</p> */}
          <ul className="list-disc ml-8 mt-3 flex flex-col gap-2 2xl:text-2xl sm:text-base text-sm">
            {/* <li>Revamped the organization's recruitment page to improve user experience and responsiveness.</li>
                    <li>Leveraged HTML, CSS, and Bootstrap to redesign the portal, resulting in a modern and user-friendly interface.</li>
                    <li>Ensured the website's responsiveness for multiple devices, enhancing accessibility for candidates.</li> */}
            <li>
              Revamped the outdated UI of the recruitment page by restructuring
              and modernizing the codebase, enhancing maintainability and
              readability, which led to a 30% reduction in code-related issues.
            </li>
            <li>
              Implemented Bootstrap to redesign the page, achieving a responsive
              layout 100% that improved user experience across devices,
              resulting in a 40% increase in user engagement.
            </li>
          </ul>
        </div>
      ),
      logo: "https://imgs.search.brave.com/wjrwXF_FsEXZQ8uuZVTXKGm-BhMmgUQRI9LhdCmNP3A/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/Ni82NS9WYXJpYWJs/ZV9FbmVyZ3lfQ3lj/bG90cm9uX0NlbnRy/ZS5zdmcvMjIwcHgt/VmFyaWFibGVfRW5l/cmd5X0N5Y2xvdHJv/bl9DZW50cmUuc3Zn/LnBuZw",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % exp.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + exp.length) % exp.length);
  };

  return (
    <div id="about-me">
      <div
        id="about-signboard"
        data-aos="fade-down"
        data-aos-duration="1200"
        data-aos-once="true"
      >
        <div>
          <div className="relative flex justify-center">
            <div
              id="rope-clip"
              className="flex lg:gap-[6rem] gap-[5rem] absolute top-[-1.8rem] z-[2]"
            >
              <img src="rope.png" alt="rope" />
              <img className="scale-x-[-1]" src="rope.png" alt="rope" />
            </div>
            <p className="bg-[#F0C0A9] text-white inline px-8 py-2 2xl:text-2xl lg:text-xl text-base rounded-full absolute top-[3rem] z-[1] text-center">
              ABOUT ME
            </p>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col xl:gap-20 lg:gap-10 gap-2 mt-32 xl:mb-32 sm:mb-16 mb-12 w-5/6 mx-auto items-center justify-center overflow-x-hidden">
        <div
          className="flex lg:flex-row flex-col items-center"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-once="true"
        >
          <p className="bg-[#A8C090] sm:p-10 p-6 rounded-2xl text-white 2xl:text-xl lg:text-lg text-sm">
            I graduated in 2023 with a degree in software engineering, and these
            days I'm a Software Developer at Osfin.ai, turning fintech chaos
            into clean, usable frontend systems. I've dabbled in everything from
            design systems to AI-powered features, and I'm always down to learn
            something new — coffee in one hand, code in the other.
          </p>
          <div
            id="message-pointer"
            className="lg:block hidden bg-[#A8C090] w-[20rem] h-[4rem]"
          ></div>
        </div>
        {/* <div className="xl:w-[40%] w-1/2" data-aos="fade-left" data-aos-duration="1200" data-aos-once="true"> */}
        <div className="xl:w-[40%] w-[70%] lg:block hidden">
          <img className="rounded-full avatar" src="avatar.png" alt="avatar" />
        </div>
      </div>
      <div
        id="experience"
        className="lg:pb-[20rem] pb-[15rem] flex flex-col lg:gap-10 sm:gap-5 gap-2 relative bg-[url(experience-bg.png)]"
      >
        <div className="flex items-center justify-center">
          <p className="bg-[#006837] 2xl:mt-20 sm:mt-12 mt-10 px-4 py-2 2xl:text-2xl lg:text-xl text-base rounded-full text-white experience-box">
            EXPERIENCE
          </p>
        </div>
        <div className="flex flex-col justify-around">
          <div className="mx-auto sm:w-[80%] w-11/12 lg:mt-5">
            <div className="carousel-content text-lime-950">
              {exp[currentIndex].content}
            </div>
          </div>
          <div
            id="carousel"
            className="flex items-end justify-center lg:text-lg sm:text-base text-sm lg:py-5 py-3 absolute bottom-0 w-full"
          >
            <div className="flex items-center justify-evenly w-full">
              <div
                onClick={prevSlide}
                className="bg-white lg:w-[5rem] sm:w-[4rem] w-[3rem] lg:h-[5rem] sm:h-[4rem] h-[3rem] flex items-center justify-center rounded-full shadow-xl cursor-pointer hover:opacity-60 cursor-none"
              >
                <i className="fa-solid fa-arrow-left"></i>
              </div>
              <div className="bg-white lg:w-[7.5rem] sm:w-[6rem] w-[5rem] lg:h-[7.5rem] sm:h-[6rem] h-[5rem] flex items-center justify-center rounded-full text-center shadow-xl overflow-hidden">
                {/* <p>{exp[currentIndex].logo}</p> */}
                <img
                  className="w-[80%] h-[80%] object-contain"
                  src={exp[currentIndex].logo}
                  alt=""
                />
              </div>
              <div
                onClick={nextSlide}
                className="bg-white lg:w-[5rem] sm:w-[4rem] w-[3rem] lg:h-[5rem] sm:h-[4rem] h-[3rem] flex items-center justify-center rounded-full shadow-xl cursor-pointer hover:opacity-60 cursor-none"
              >
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
