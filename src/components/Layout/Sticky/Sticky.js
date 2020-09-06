import React from "react";

function Sticky({ children }) {
  return (
    <div className="sticky top-0 z-50 bg-white bg-opacity-25">{children}</div>
  );
}

export default Sticky;
