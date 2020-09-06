import React from "react";
import Project from "../../Projects/Project/Project";
import Masonry from "react-masonry-css";
import { breakpointColumnsObj } from "../../../util/masonry";

export default function Collection({ projects }) {
  return (
    <div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {projects.map((project) => (
          <Project key={project.sys.id} {...project.fields} opened />
        ))}
      </Masonry>
    </div>
  );
}
