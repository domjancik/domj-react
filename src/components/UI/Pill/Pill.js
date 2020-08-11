import React from "react";

function Pill(props) {
  return (
    <div className="inline-block rounded-full bg-teal-300 text-white px-4 mx-2">
      {props.children}
    </div>
  );
}

export default Pill;
