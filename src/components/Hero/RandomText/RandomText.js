import React, { useState, useEffect } from "react";

function RandomText(props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const handleEnter = () => {
    setPaused(true);
  };

  const handleLeave = () => {
    setPaused(false);
  };

  useEffect(() => {
    const nameRefreshInterval = setInterval(() => {
      if (paused) return;

      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * props.texts.length);
      } while (newIndex === index);
      setIndex(newIndex);
    }, props.interval);

    return () => {
      clearInterval(nameRefreshInterval);
    };
  }, [paused, index]);

  return (
    <span onMouseEnter={handleEnter} onMouseOut={handleLeave}>
      {props.texts[index]}
    </span>
  );
}

RandomText.defaultProps = {
  interval: 100,
};

export default RandomText;
