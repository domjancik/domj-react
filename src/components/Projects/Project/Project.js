import React from "react";

import image from "../../../logo.svg";

function Project(props) {
  return (
    <div>
      <img src={image} alt="Description" title="Description" />
      <h1 className="text-2xl text-center">{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}

export default Project;
