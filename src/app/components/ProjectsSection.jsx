"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "My portfolio website made with Next JS.",
    image: "/images/projects/portfolio.png",
    tag: ["All", "Web"],
    gitUrl:"https://github.com/abnerkaizer/portfolio-website",
    previewUrl:"/",
  },
  {
    id: 2,
    title: "Sphere 64",
    description: "A web-based game made with aframe and HTML5.",
    image: "/images/projects/Sphere64.png",
    tag: ["All", "Web"],
    gitUrl:"https://github.com/abnerkaizer/cg/tree/main/Trabalho2",
    previewUrl:"https://abnerkaizer.github.io/cg/Trabalho2/index.html",
  },
  {
    id: 3,
    title: "Movie rating and listing",
    description: "A simple website using the TMDB API and ReactJS.",
    image: "/images/projects/wireframe-home.png",
    tag: ["All", "Web"],
    gitUrl:"https://github.com/abnerkaizer/wireframe",
    previewUrl:"https://abnerkaizer.github.io/wireframe/",
  },
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section id="projects" ref={ref}>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
          key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;