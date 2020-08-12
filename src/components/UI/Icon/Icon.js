import React, { useState } from "react";

function Icon(props) {
  const [hover, setHover] = useState(false);

  const handleEnter = () => {
    setHover(true);
  };

  const handleLeave = () => {
    setHover(false);
  };

  let icon = props.icon;
  if (props.hover && hover) icon = props.hover;

  return (
    <i
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`${props.prefix} fa-${icon} mx-4 hover:text-teal-300 transition duration-200`}
    ></i>
  );
}

Icon.defaultProps = {
  prefix: "fab",
};

export default Icon;
