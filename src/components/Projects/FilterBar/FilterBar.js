import React from "react";
import Emoji from "../../UI/Emoji/Emoji";

export default function FilterBar({ sortDirection, toggleSortDirection }) {
  const directionBaseClasses =
    "transform transition duration-500 inline-block ";

  return (
    <div className="text-center">
      Sort direction:{' '} 
      <button
        onClick={toggleSortDirection}
        className="text-xl focus:outline-none focus:shadow-outline rounded"
      >
        <Emoji label="Newborn">👶</Emoji>
        <span
          className={
            directionBaseClasses + (sortDirection ? "rotate-0" : "rotate-180")
          }
        >
          {'->'}
        </span>
        <Emoji label="Eldest">👴</Emoji>
      </button>
    </div>
  );
}
