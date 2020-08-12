import React from "react";

function ExternalLink(props) {
  return (
    <a href={props.href} target="_blank" rel="noopener noreferrer">
      {props.children}
    </a>
  );
}

export default ExternalLink;
