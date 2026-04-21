"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 text-white">
        <li>Python</li>
        <li>Java</li>
        <li>ReactJS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 text-white">
        <Link
          className="hover:text-blue-400"
          href="https://drive.google.com/file/d/1J6VYx7ru7vJGD9bt_KYMp4afFJQiqdFC/view?usp=sharing"
        >
          <li>Centro Federal de Educação Tecnológica de Minas Gerais</li>
        </Link>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 text-white">
        <li>
          <Link
            className="hover:text-blue-400"
            href="https://drive.google.com/file/d/15QDbFsgubRkskZK1g1p7Y-lun4Am_J4w/view?usp=sharing"
          >
            Crash Course on Python
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-blue-400"
            href="https://drive.google.com/file/d/1byw5O7EkjHIcWrFl1HDjfkpgMzZq9gt8/view?usp=sharing"
          >
            Java Spring Boot 3
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-blue-400"
            href="https://drive.google.com/file/d/1lZtVh9GIFY7D8AB79WTNcpj86vFy9rUi/view?usp=sharing"
          >
            EF SET Certificate
          </Link>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="text-white">
      <div className="gap-8 items-center py-8 px-4 xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-16">
        <div className="relative w-full h-80 md:h-full min-h-80 rounded-xl overflow-hidden">
          <Image
            src="/images/setup.jpg"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
            alt="Setup"
          />
        </div>

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-white text-base md:text-lg text-justify">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Node.js, Express, MySQL, HTML, CSS,
            and Git. I am a quick learner and I am always looking to expand my
            knowledge and skill set. I am a team player and I am excited to work
            with others to create amazing applications.
          </p>

          <Tabs defaultValue="skills" className="mt-8">
            <TabsList className="bg-transparent gap-2 p-0 justify-start">
              {TAB_DATA.map((t) => (
                <TabsTrigger
                  key={t.id}
                  value={t.id}
                  className="
                    px-0 pb-2 mr-3 rounded-none bg-transparent text-white
                    font-semibold border-b-2 border-transparent
                    data-[state=active]:text-blue-500 data-[state=active]:border-primary-500
                    data-[state=active]:bg-transparent data-[state=active]:shadow-none
                    hover:text-blue-500 transition-colors
                  "
                >
                  {t.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {TAB_DATA.map((t) => (
              <TabsContent key={t.id} value={t.id} className="mt-4">
                {t.content}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
