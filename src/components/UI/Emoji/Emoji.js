import React from "react";

function Emoji(props) {
  return (
    <span role="img" className={props.className} aria-label={props.label}>
      {props.children}
    </span>
  );
}

export default Emoji;
