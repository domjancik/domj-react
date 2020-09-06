import React from "react";
import Project from "../../Projects/Project/Project";
import Masonry from "../../../hoc/Masonry/Masonry";
import { Link } from "react-router-dom";
import Breadcrumb from "../../UI/Breadcrumb/Breadcrumb";
import AllProjectsPrompt from "../../Layout/Navigation/AllProjectsPrompt/AllProjectsPrompt";

export default function Collection({ projects, title }) {
  return (
    <div>
      {/* <Breadcrumb path={`Projects/${title}`} /> */}
      <Masonry>
        {projects.map((project) => (
          <Project key={project.sys.id} {...project.fields} opened />
        ))}
      </Masonry>
      <AllProjectsPrompt />
    </div>
  );
}
