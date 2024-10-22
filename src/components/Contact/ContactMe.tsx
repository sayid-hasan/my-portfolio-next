"use client";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineDoubleArrow, MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";

import "./contactMe.css";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Link from "next/link";

const ContactMe = () => {
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [senderMessage, setSenderMessage] = useState("");
  const handleSendEmail = async (e: any) => {
    e.preventDefault();
    console.log(process.env.NEXT_PUBLIC_VITE_SERVICE_ID);
    const data = {
      service_id: process.env.NEXT_PUBLIC_VITE_SERVICE_ID,
      template_id: process.env.NEXT_PUBLIC_VITE_TEMPLATE_ID,
      user_id: process.env.NEXT_PUBLIC_VITE_PUBLIC_KEY,
      template_params: {
        from_name: senderName,
        to_name: "mohammad syed hasan",
        from_email: senderEmail,
        message: senderMessage,
      },
    };
    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      console.log(res);
      if (res?.data === "OK") {
        Swal.fire({
          position: "center-left",
          icon: "success",
          title: "Thanks for connecting. You'll be replied as soon as possible",
          showConfirmButton: false,
          timer: 1500,
        });
        setSenderEmail("");
        setSenderMessage("");
        setSenderName("");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div
      id="contact"
      className="font-oswald tracking-[1px]  bg-[#111111] max-w-7xl mx-auto md:px-5 px-3 py-4 md:py-8 rounded-md
      "
    >
      <div className="flex justify-center mb-8">
        <div className=" text-center primary__title text-purple  text-4xl md:text-[55px] leading-[95px]  md:px-6 w-fit tracking-[2px] hover__underline">
          Contact Me
        </div>
      </div>
      <div className=" flex flex-col md:flex-row md:justify-between gap-5">
        <div className="section__header flex-1">
          <div className="text__muted description tracking-[2px] text-base">
            <span className="block font-bold primary__title md:text-2xl text-lg">
              Ready to Elevate Your Digital Projects?
            </span>
            Are you looking for a motivated and enthusiastic full stack
            developer to join your team? Whether you need support with launching
            new projects, enhancing existing ones, or implementing the latest
            web technologies, I am eager to contribute and learn
            <div className="flex gap-2 items-stretch font-bold primary__title md:text-2xl text-lg">
              <span>Get In Touch</span>{" "}
              <MdOutlineDoubleArrow className="self-center color__primary text-4xl "></MdOutlineDoubleArrow>
            </div>
            Let&#39;s discuss how I can bring value to your team. Reach out to
            talk about your project needs, ask questions, or explore potential
            opportunities. I am excited to hear from you and look forward to
            contributing to your success
          </div>
        </div>
        <div className="contact__group grid grid-cols-[45%_50%] justify-between gap-5 m-auto w-[60%] ">
          <div className="contact__options flex flex-col gap-5 ">
            <article className="contact__option flex flex-col gap-2">
              <div className="contact__icon flex justify-center text-2xl text-[#8750f7]">
                <MdOutlineEmail></MdOutlineEmail>
              </div>
              <h3>Email</h3>
              <h5>syedhasanmohammad@gmail.com</h5>
              <Link
                target="_blank"
                href="mailto:syedhasanmohammad@gmail.com"
                className="btn rounded-full w-full px-4 py-2 border-none outline-none transition-all duration-1000 bg-gradient-to-tr from-[#1c1405c5] to-[#8750f7] hover:bg-gradient-to-bl mt-4"
              >
                Send a Message
              </Link>
            </article>
            <article className="contact__option flex flex-col gap-2">
              <div className="contact__icon flex justify-center text-2xl text-[#168AFF]">
                <RiMessengerLine></RiMessengerLine>
              </div>

              <h3>Messenger</h3>
              <h5>sayid hasan</h5>
              <Link
                target="_blank"
                href="http://m.me/profile?id=sayid.hasan.560"
                className="btn rounded-full w-full px-4 py-2 border-none outline-none transition-all duration-1000 bg-gradient-to-tr from-[#1c1405c5] to-[#8750f7] hover:bg-gradient-to-bl mt-4"
              >
                Send a Message
              </Link>
            </article>
            <article className="contact__option flex flex-col gap-2">
              <div className="contact__icon flex justify-center text-2xl text-[#25D366]">
                <BsWhatsapp></BsWhatsapp>
              </div>

              <h3>WhatsApp</h3>
              <h5>+971 54 420 7896</h5>
              <Link
                target="_blank"
                href="https://wa.me/+971544207896"
                className="btn rounded-full w-full px-4 py-2 border-none outline-none transition-all duration-1000 bg-gradient-to-tr from-[#1c1405c5] to-[#8750f7] hover:bg-gradient-to-bl mt-4"
              >
                Send a Message
              </Link>
            </article>
          </div>
          <form
            onSubmit={handleSendEmail}
            className="flex flex-col gap-5 justify-between "
          >
            <input
              type="text"
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              value={senderEmail}
              onChange={(e) => setSenderEmail(e.target.value)}
              placeholder="Your Email"
              required
            />
            <textarea
              value={senderMessage}
              onChange={(e) => setSenderMessage(e.target.value)}
              name="message"
              rows={7}
              required
            ></textarea>
            <button
              type="submit"
              className="btn px-4 py-2 rounded-full border-none outline-none transition-all duration-300 bg-gradient-to-tr from-[#1c1405c5] to-[#8750f7] hover:bg-gradient-to-bl"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
