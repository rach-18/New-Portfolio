import { useState } from "react";
import Swal from "sweetalert2";

function Contact() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        Swal.fire({
            title: "Loading...",
            text: "Be patient while I receive your message!!",
            background: "url(https://sweetalert2.github.io/images/trees.png)",
            allowOutsideClick: false,  // Prevent closing the alert by clicking outside
            didOpen: () => {
                Swal.showLoading();  // Show loading spinner
            }
        });
        const formData = new FormData(event.target);

        formData.append("access_key", "9339e58b-d737-4a6c-916a-2f3ea3a64739");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success",
                confirmButtonColor: "#A8C090",
                background: "url(https://sweetalert2.github.io/images/trees.png)"
            });
            event.target.reset();
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Could not send the message. Try again!",
                confirmButtonColor: "#F27474",
                background: "url(https://sweetalert2.github.io/images/trees.png)"
            });
            console.log(data.message);
        }
    };

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
                <form onSubmit={onSubmit} className="flex flex-col pb-10 sm:pt-10 pt-8 w-5/6 mx-auto sm:gap-5 gap-3">
                    <input className="sm:p-4 p-3 rounded-lg shadow-md" type="text" name="name" placeholder="Name..." />
                    <input className="sm:p-4 p-3 rounded-lg shadow-md" type="text" name="email" placeholder="Email..." />
                    <textarea className="sm:p-4 p-3 rounded-lg shadow-md" rows="5" name="message" placeholder="Message..."></textarea>
                    <button id="submit-btn" className="bg-[#A8C090] hover:bg-[#B7CFAF] text-white sm:text-xl font-bold sm:w-[20%] w-[25%] mx-auto py-3 rounded-lg cursor-none" type="submit">SUBMIT</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;
