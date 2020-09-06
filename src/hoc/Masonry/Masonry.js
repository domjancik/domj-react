import React from "react";
import MasonryWrap from "react-masonry-css";
import { breakpointColumnsObj } from "../../util/masonry";

function Masonry({ children, columns = 3 }) {
  return (
    <MasonryWrap
      breakpointCols={{ ...breakpointColumnsObj, default: columns }}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {children}
    </MasonryWrap>
  );
}

export default Masonry;
