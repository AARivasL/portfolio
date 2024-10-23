"use client";
import { useRef } from "react";
import Header from "@/components/header";
import AboutMe from "@/components/aboutMe";
import Experience from "@/components/experience";
import HardSkill from "@/components/hardSkill";
import Projects from "@/components/projects";

export default function Home() {

  const aboutMeRef = useRef(null);
  const experienceRef = useRef(null);
  const techRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollToAboutMe = () => {
    if (aboutMeRef.current) {
      aboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToExperience = () => {
    if (experienceRef.current) {
      experienceRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTech = () => {
    if (techRef.current) {
      techRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Header 
        scrollToAboutMe={scrollToAboutMe}
        scrollToExperience={scrollToExperience}
        scrollToTech={scrollToTech}
        scrollToProjects={scrollToProjects}
      />
      <AboutMe aboutMeRef={aboutMeRef} />
      <Experience experienceRef={experienceRef} />
      <HardSkill hardSkillRef={techRef} />
      <Projects projectsRef={projectsRef} />
    </div>


  );
}
