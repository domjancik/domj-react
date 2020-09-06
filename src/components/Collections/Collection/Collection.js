import React from "react";
import Project from "../../Projects/Project/Project";

export default function Collection({ projects }) {
  return (
    <div>
      {projects.map((project) => (
        <Project key={project.sys.id} {...project.fields} opened />
      ))}
    </div>
  );
}
