import React from "react";
import Project from "../../Projects/Project/Project";
import Masonry from "../../../hoc/Masonry/Masonry";
import Flicker from "../../../hoc/Animation/Flicker/Flicker";
import Emoji from "../../UI/Emoji/Emoji";

export default function Collection({ projects, title, emoji }) {
  return (
    <div>
      {emoji ? (
        <div className="text-center text-4xl mb-6">
          <Emoji label={title} emoji={emoji} />
        </div>
      ) : null}
      <Masonry>
        {projects.map((project) => (
          <Project key={project.sys.id} {...project.fields} opened />
        ))}
      </Masonry>
    </div>
  );
}
