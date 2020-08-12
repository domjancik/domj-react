import React from "react";

function Emoji(props) {
  return (
    <span role="img" aria-label={props.label}>
      {props.children}
    </span>
  );
}

export default Emoji;
