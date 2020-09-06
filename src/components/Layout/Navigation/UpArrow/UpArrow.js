import React from "react";

export default function UpArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="border border-teal-200 text-teal-200 border-1 bg-white w-10 h-10 rounded-full flex flex-wrap content-center justify-center shadow-md"
    >
      <div className="text-4xl -mb-3">^</div>
    </div>
  );
}
