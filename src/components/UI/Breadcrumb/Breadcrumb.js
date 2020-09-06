import React from "react";
import Caret from "../Caret/Caret";

export default function Breadcrumb({ path }) {
  const pathParts = path.split("/");

  const current = pathParts.pop();
  const directory = pathParts.join("/");

  {
    /* <h1 className="text-center text-2xl my-4"><Link to="/collections">Collections</Link>/<span className="font-bold">{title}</span></h1> */
  }

  return (
    <h1 className="text-2xl my-4 pl-2">
      {">"} {directory}/
      <span className="font-bold">
        {current}
        <Caret />
      </span>
    </h1>
  );
}
