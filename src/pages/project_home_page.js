import React from "react";
import { Link } from "react-router-dom";

function ProjectHomePage() {
  const projects = [
    {
      title: "Nike Project",
      url: "/nike-page",
      description:
        "A project showcasing the latest Nike product line and promotions.",
    },
    {
      title: "Contact Project",
      url: "/contact-page",
      description:
        "A contact management system to easily organize and track communication.",
    },
    {
      title: "Dice Game",
      url: "/dice-game",
      description:
        "An online platform for exploring various restaurants and food recipes.",
    },
    {
      title: "Foody Zone",
      url: "/foody-zone",
      description:
        "An online platform for exploring various restaurants and food recipes.",
    },
  ];

  return (
    <div className="container mx-auto my-12 px-4 lg:px-0">
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
        {projects.map((project, index) => {
          return (
            <div className="shadow border rounded-xl overflow-hidden">
              <iframe
                className="w-full h-[300px] border pointer-events-none"
                src={`http://192.168.1.48:3000${project.url}`}
                scrolling="no"
              ></iframe>
              <div className=" p-4 ">
                <h3 className="text-lg font-semibold mb-1">
                  {index + 1}. {project.title}
                </h3>
                <p className="text-sm mb-6">{project.description}</p>
                <Link
                  to={project.url}
                  className="bg-blue-600 hover:bg-blue-900 text-white px-4 py-2 rounded shadow"
                >
                  View Project
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectHomePage;
