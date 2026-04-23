"use client";
import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import CodebergIcon from "../../../public/codeberg-icon.svg";
import Link from "next/link";
import Image from "next/image";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div
        className="rounded-full h-80 w-80 z-0 blur-lg absolute right-10 top-1/4 transform -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, #1e3a8a 0%, transparent 70%)",
        }}
      ></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/abnerkaizer">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://codeberg.org/abner">
            <Image src={CodebergIcon} alt="Codeberg Icon" />
          </Link>
          <Link href="https://linkedin.com/in/abnerkaizer">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
