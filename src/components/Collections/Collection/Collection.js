import React from "react";
import Project from "../../Projects/Project/Project";
import Masonry from "../../../hoc/Masonry/Masonry";
import AllProjectsPrompt from "../../Layout/Navigation/AllProjectsPrompt/AllProjectsPrompt";
import Flicker from "../../../hoc/Animation/Flicker/Flicker";
import Emoji from "../../UI/Emoji/Emoji";

export default function Collection({ projects, title, emoji }) {
  return (
    <div>
      <Flicker
        component={"h1"}
        className="text-center text-2xl mb-6 transition duration-100"
        flickerClass="text-teal-200"
      >
        {title}
      </Flicker>
      {emoji ? (
        <div className="text-center text-4xl mb-6">
          <Emoji label={title}>{emoji}</Emoji>
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
