import React from "react";

export default function ProjectSkeleton(props) {
  const img = <div className="rounded w-full h-16" />;
  return (
    <div
      className="p-2 md:p-4 border-dotted border-4 border-teal-200 rounded-md box-border"
      {...props.flippedProps}
    >
      <div>
        {img}
        <div
          className="text-xs text-white -mt-6 z-10 relative p-3 rounded pointer-events-none"
          style={{ backgroundColor: "black" }}
        >
          <div className="float-left -mt-2">Lorem?</div>

          <div className="float-right -mt-2">{new Date().getFullYear()}</div>
        </div>
      </div>
      <div className="mb-2 mt-4 text-center">
        <h1 className="text-2xl">{title}</h1>
        Ipsum!
      </div>
      <Paragraph>Lorem?</Paragraph>

      <div className="text-center">
        <button className="transition duration-200 text-2xl rounded hover:bg-teal-200 hover:text-white border-none focus:outline-none focus:shadow-outline w-full">
          +
        </button>
      </div>
    </div>
  );
}
