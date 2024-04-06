"use client"
import React,{useState} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag';

const projectsData = [
    {
      id: 1,
      title: "React Portfolio Website",
      description: "Project 1 description",
      image: "/images/projects/portfolio.png",
      tag: ["All", "Web"],
      gitUrl:"/",
      previewUrl:"/",
    },
    {
      id: 2,
      title: "Sphere 64",
      description: "Project 2 description",
      image: "/images/projects/Sphere64.png",
      tag: ["All", "Web"],
      gitUrl:"https://github.com/abnerkaizer/cg/tree/main/Trabalho2",
      previewUrl:"https://abnerkaizer.github.io/cg/Trabalho2/index.html",
    },
    {
      id: 3,
      title: "Movie rating and listing",
      description: "Project 3 description",
      image: "/images/projects/wireframe-home.png",
      tag: ["All", "Web"],
      gitUrl:"https://github.com/abnerkaizer/wireframe",
      previewUrl:"https://abnerkaizer.github.io/wireframe/",
    },
    
  ];
  const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
  
    const filteredProjects = projectsData.filter((project) =>
      project.tag.includes(tag)
    );
  
    const handleTagChange = (newTag) => {
      setTag(newTag);
    };
  
    return (
      <>
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          My Projects
        </h2>
        <div className="flex flex-row justify-center items-center gap-2 text-white my-6">
          <ProjectTag
            name="All"
            onClick={handleTagChange}
            isSelected={tag === "All"}
          />
          <ProjectTag
            name="Web"
            onClick={handleTagChange}
            isSelected={tag === "Web"}
          />
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          ))}
        </div>
      </>
    );
  };

export default ProjectsSection
