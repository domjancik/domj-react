import React from "react";

import Flicker from "../../../hoc/Animation/Flicker/Flicker"

function Pill(props) {
  return (
    <Flicker probability={0.95} style={{boxShadow: '0 3px black'}} className="inline-block rounded-full text-white px-4 mx-2 my-1 transition-colors duration-500" flickerClass={['bg-teal-600', 'bg-teal-300']}>
      {props.children}
    </Flicker>
  );
}

export default Pill;
