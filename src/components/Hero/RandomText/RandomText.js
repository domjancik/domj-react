import React, { useState, useEffect, useRef } from "react";
import classes from "../../../util/util.module.css";

// IDEAS //
// - React to scrolling - pause on no scroll or inverted
// - Random pause
// - Start moving on first scroll, don't stop
// - First title Creative Developer and then it will just be random?

function RandomText(props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(true);
  const [style, setStyle] = useState({});

  const self = useRef(null);

  // Auto unpause on scroll
  useEffect(() => {
    const listener = () => {
      setPaused(false);
      window.removeEventListener("scroll", listener);
    };
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  const handleEnter = () => {
    setPaused(true);
  };

  const handleLeave = () => {
    setPaused(false);

    const x = 0;
    const y = 0;

    setStyle({
      // transform: transform([{ scaleX: 2 }]),
      transform: `translate(${x}px, ${y}px)`,
      backgroundColor: "inherit",
      color: "inherit",
    });
  };

  const handleScroll = (event) => {
    console.log("Scrolling");
    console.log(event);

    setPaused(false);
  };

  const handleMove = (event) => {
    // console.log(self);
    const boundRect = self.current.getBoundingClientRect();
    // console.log(boundRect);

    const x = event.clientX - boundRect.left - boundRect.width / 2;
    const y = event.clientY - boundRect.top - boundRect.height / 2;

    setStyle({
      // transform: transform([{ scaleX: 2 }]),
      transform: `translate(${x}px, ${y}px)`,
      backgroundColor: "black",
      color: "white",
      borderRight: "black 500px solid",
      borderLeft: "black 500px solid",
    });
  };

  const handleMoveBars = (event) => {
    console.log(self);
    const boundRect = self.current.getBoundingClientRect();
    console.log(boundRect);

    const x = event.clientX - boundRect.left;
    const y = event.clientY - boundRect.top;

    setStyle({
      // transform: transform([{ scaleX: 2 }]),
      transform: `translate(${x}px, ${y}px)`,
      backgroundColor: "black",
      borderRight: "black 500px solid",
      borderLeft: "black 500px solid",
    });
  };

  // Random text changing
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

  // Follow mouse
  useEffect(() => {}, [paused]);

  return (
    <div
      ref={self}
      onMouseEnter={handleEnter}
      onMouseOut={handleLeave}
      onMouseMove={handleMove}
      onScroll={handleScroll}
      style={style}
      className={`${classes.NoCursor} ${classes.Smooth}`}
    >
      {props.texts[index]}
    </div>
  );
}

RandomText.defaultProps = {
  interval: 100,
};

export default RandomText;
