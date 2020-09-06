import React from "react";
import { Link } from "react-router-dom";
import ProjectThumbnail from "../Collection/ProjectThumbnail/ProjectThumbnail";

function CollectionPreview({ projects, title, slug }) {
  return (
    <div>
      <Link to={`/collections/${slug}`}>
        <div className="p-2 md:p-4 border-dotted border-4 border-teal-200 rounded-md box-border text-center transition duration-200 transform hover:-translate-y-1 shadow-xs hover:shadow-md">
          <div className="mb-4">
            <h2 className="text-2xl">{title}</h2>
          </div>
          <div className="rounded bg-white flex">
            {projects.slice(0, 4).map((project) => {
              return (
                <ProjectThumbnail
                  className="flex-1 w-1"
                  key={project.sys.id}
                  {...project.fields}
                />
              );
            })}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CollectionPreview;
