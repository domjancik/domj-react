import React, { useState } from "react";
import NavigationButton from "./NavigationButton/NavigationButton";

export default function Navigation() {
  //const navEl = useRef(null); Ref doesn't work in this case, TODO investigate
  const [el, setEl] = useState(null);

  return (
    <>
      <div className="text-center" ref={(el) => setEl(el)}>
        <NavigationButton to="/projects" exact scrollComponent={el}>
          Projects
        </NavigationButton>
        <NavigationButton to="/collections" scrollComponent={el}>
          Collections
        </NavigationButton>
        <NavigationButton to="/about" scrollComponent={el}>
          About
        </NavigationButton>
      </div>
      <hr />
    </>
  );
}
