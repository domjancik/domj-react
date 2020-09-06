import React from "react";
import Project from "../../Projects/Project/Project";
import Masonry from "../../../hoc/Masonry/Masonry";

export default function Collection({ projects, title }) {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold my-4">{title}</h1>
      <Masonry>
        {projects.map((project) => (
          <Project key={project.sys.id} {...project.fields} opened />
        ))}
      </Masonry>
    </div>
  );
}
