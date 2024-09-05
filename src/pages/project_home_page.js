import React from "react";
import { Link } from "react-router-dom";

function ProjectHomePage() {
  return (
    <div className="container mx-auto my-12 px-4 lg:px-0">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border p-4">
          <h3>Nike Project</h3>
          <Link to="/nike-page">View Project</Link>
        </div>
        <div className="border p-4">
          <h3>Contact Project</h3>
          <Link to="/contact-page">View Project</Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectHomePage;
