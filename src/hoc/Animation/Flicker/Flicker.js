import React, { useEffect } from "react";
import { useState } from "react";

// TODO try to make more generic, not just for class names - give prop alternatives?

export default function Flicker(props) {
  const [flickering, setFlickering] = useState(false);
  const { flickerClass, component, ...newProps } = props;

  const Component = component ? component : "div";

  let flickerOnClass = "";
  let flickerOffClass = "";

  if (flickerClass instanceof Array) {
    flickerOffClass = flickerClass[0];
    flickerOnClass = flickerClass[1];
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const on = Math.random() < 0.95;
      setFlickering(on);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const addClass = flickering ? flickerOnClass : flickerOffClass;

  let classes = props.className;
  if (addClass) {
    classes += " " + addClass;
  }

  return <Component {...newProps} className={classes} />;
}
