import React, { useState } from "react";
import NavigationButton from "./NavigationButton/NavigationButton";
import SubNavigationButton from "./SubNavigationButton/SubNavigationButton";
import { Route } from "react-router-dom";

export default function Navigation() {
  //const navEl = useRef(null); Ref doesn't work in this case, TODO investigate
  const [el, setEl] = useState(null);

  return (
    <>
      <div className="text-center" ref={(el) => setEl(el)}>
        {/* <NavigationButton to="/projects" exact scrollComponent={el}>
          Projects
        </NavigationButton> */}
        <NavigationButton to="/projects" scrollComponent={el}>
          Projects
        </NavigationButton>
        <NavigationButton to="/about" scrollComponent={el}>
          About
        </NavigationButton>
      </div>
      <hr />
      <Route path="/projects">
        <div className="text-center">
          <SubNavigationButton exact to="/projects" scrollComponent={el}>
            Collections
          </SubNavigationButton>
          <SubNavigationButton to="/projects/all" scrollComponent={el}>
            All
          </SubNavigationButton>
        </div>
      </Route>
      <hr />
    </>
  );
}
