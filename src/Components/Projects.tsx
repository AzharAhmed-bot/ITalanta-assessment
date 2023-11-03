import { dataService } from "./dataService";
import { useEffect, useState } from "react";

type projectData = {
  url: string;
}[];

export default function Projects() {
  const url: string = "projects";

  const [projects, setProjects] = useState<projectData[]>([]);

  useEffect(() => {
    dataService(url, setProjects);
  }, []);

  return (
    <>
      <div className="text-center">
        <h1 className="text-5xl font-semibold mt-10">Some of our impact projects</h1>
      </div>
      <div className="overflow-hidden mt-28 w-full">
        <div className="scrolling-images" >
          {projects.map((project, index) => (
            <img
              key={index}
              src={project.url}
              alt={`Project ${index}`}
              className="w-auto h-24 inline-block mr-2 py-6"
            />
          ))}
        </div>
      </div>
      <div className="text-center mt-20 ">
        <h1 className="text-5xl"><span>Become part of our mission </span><br />and <span className="hover:underline font-semibold">join elewa.</span></h1>
      </div>
    </>
  );
}
