import React from "react";
import { Link } from "react-router-dom";
import ProjectThumbnail from "../Collection/ProjectThumbnail/ProjectThumbnail";
import Flicker from "../../../hoc/Animation/Flicker/Flicker";

function CollectionPreview({ projects, title, slug }) {
  return (
    <div>
      <Link to={`/projects/${slug}`}>
        <div className="bg-blue p-2 md:p-4 border-1 border rounded-md box-border text-center transition duration-200 transform hover:-translate-y-1 shadow-xs hover:shadow-md">
          <div className="mb-4">
            <Flicker
              component={"h2"}
              className="text-2xl -m-4 mb-0 rounded py-4 transition duration-100"
              flickerClass="text-teal-200"
              style={{
                borderBottomRightRadius: 0,
                borderBottomLeftRadius: 0,
              }}
            >
              {title}
            </Flicker>
          </div>
          <div className="flex">
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
