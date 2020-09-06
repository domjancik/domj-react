import React from "react";

function Sticky({ children }) {
  return (
    <div className="md:sticky top-0 z-50 bg-white shadow-lg">{children}</div>
  );
}

export default Sticky;
