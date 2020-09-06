import React, { useEffect } from "react";
import { useState } from "react";

export default function Flicker(props) {
  const [flickering, setFlickering] = useState(false);

  const Component = props.component;
  const flickerClass = props.flickerClass;
  //   delete props["component"];
  //   delete props["flickerClass"];

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.8) return;
      setFlickering((flickering) => !flickering);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  let classes = props.className;
  if (flickering) {
    classes += " " + flickerClass;
  }

  return <Component {...props} className={classes} />;
}
