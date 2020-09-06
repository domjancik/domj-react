import React from "react";
import { get } from "lodash";

function ProjectThumbnail(props) {
  let imgSrc =
    get(props, "heroImage.fields.file.url", "NOTFOUND") +
    "?fm=jpg&fl=progressive&w=250&h=250&fit=thumb";

  return (
    <img
      className={"rounded m-2 border-box " + props.className}
      src={imgSrc}
      alt={props.title}
    />
  );
}

export default ProjectThumbnail;
