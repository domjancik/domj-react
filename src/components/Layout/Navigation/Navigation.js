import React, { useState } from "react";
import NavigationButton from "./NavigationButton/NavigationButton";
import { Route } from "react-router-dom";
import useCollections from "../../../hooks/use-collections";
import UpArrow from "./UpArrow/UpArrow";
import scrollToComponent from "react-scroll-to-component";
import ShowOnScroll from "../../../hoc/Animation/ShowOnScroll/ShowOnScroll";
import Sticky from "../Sticky/Sticky";

export default function Navigation() {
  //const navEl = useRef(null); Ref doesn't work in this case, TODO investigate
  const [el, setEl] = useState(null);
  const collections = useCollections();

  return (
    <>
      <div className="text-center" ref={(el) => {setEl(el); console.log(el)}}></div>
      <ShowOnScroll threshold={700}>
        <div className="fixed right-0 bottom-0 pr-4 pb-4 z-50 md:hidden">
          <UpArrow onClick={() => scrollToComponent(el, { align: "top" })} />
        </div>
      </ShowOnScroll>
      <hr />
      <Sticky>
        <Route path="/projects">
          <div className="text-center">
            <NavigationButton to="/projects" exact scrollComponent={el}>
              All
            </NavigationButton>
            {collections.map((collection) => (
              <NavigationButton
                scrollComponent={el}
                to={`/projects/${collection.fields.slug}`}
                key={collection.fields.slug}
              >
                {collection.fields.title}
              </NavigationButton>
            ))}
          </div>
        </Route>
        <hr className="mb-8" />
      </Sticky>
    </>
  );
}
