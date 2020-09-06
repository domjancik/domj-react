import React, { useEffect } from "react";
import { useState } from "react";

// TODO try to make more generic, not just for class names - give prop alternatives?

export default function Flicker(props) {
  const [flickering, setFlickering] = useState(false);

  const Component = props.component ? props.component : 'div';
  
  let flickerOnClass = ''
  let flickerOffClass = ''

  if (props.flickerClass instanceof Array) {
    flickerOffClass = props.flickerClass[0]
    flickerOnClass = props.flickerClass[1]
  }

  // const flickerClass = props.flickerClass;
  //   delete props["component"];
  //   delete props["flickerClass"];

  useEffect(() => {
    const interval = setInterval(() => {
      //let flicker
      const on = Math.random() < 0.95
      //if () return;
      setFlickering(on);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const flickerClass = flickering ? flickerOnClass : flickerOffClass;

  let classes = props.className;
  if (flickerClass) {
    classes += " " + flickerClass;
  }

  return <Component {...props} className={classes} />;
}
