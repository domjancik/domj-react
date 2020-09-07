import React from "react";
import Emoji from "../../UI/Emoji/Emoji";

export default function FilterBar({ sortDirection, toggleSortDirection }) {
  const directionBaseClasses =
    "transform transition duration-500 inline-block ";

  return (
    <div className="text-center text-4xl mb-6">
      <button
        onClick={toggleSortDirection}
        className="focus:outline-none focus:shadow-outline rounded"
      >
        <Emoji label="Newborn" emoji="👶" />
        <span
          className={
            directionBaseClasses + (sortDirection ? "rotate-0" : "rotate-180")
          }
        >
          {'->'}
        </span>
        <Emoji label="Eldest" emoji="👴" />
      </button>
    </div>
  );
}
