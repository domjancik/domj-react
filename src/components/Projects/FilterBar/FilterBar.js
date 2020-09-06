import React from "react";
import Emoji from "../../UI/Emoji/Emoji";

export default function FilterBar({ sortDirection, toggleSortDirection }) {
  const directionBaseClasses =
    "transform transition duration-500 inline-block ";

  return (
    <div className="text-center sticky top-0 z-50 bg-white bg-opacity-25">
      <button
        onClick={toggleSortDirection}
        className="text-xl focus:outline-none focus:shadow-outline rounded"
      >
        <Emoji label="Newborn">👶</Emoji>
        <Emoji
          label="Direction"
          className={
            directionBaseClasses + (sortDirection ? "rotate-0" : "rotate-180")
          }
        >
          ⏩
        </Emoji>
        <Emoji label="Eldest">👴</Emoji>
      </button>
    </div>
  );
}
