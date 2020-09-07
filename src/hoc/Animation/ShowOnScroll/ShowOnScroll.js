import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function ShowOnScroll({ threshold, children }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const listener = window.addEventListener("scroll", (e) => {
      setVisible(window.pageYOffset > threshold)
    });
    return () => {
      window.removeEventListener(listener);
    };
  }, [threshold]);

  const classes = visible ? "opacity-100" : "opacity-0";

  return <div className={`transition duration-300 ${classes}`}>{children}</div>;
}
