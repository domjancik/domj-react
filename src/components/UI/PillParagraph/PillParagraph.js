import React, { Fragment } from "react";
import Paragraph from "../Paragraph/Paragraph";
import Pills from "../Pill/Pills";
import ParagraphHeading from "../Headings/ParagraphHeading";

function PillParagraph(props) {
  return (
    <Fragment>
      <ParagraphHeading className="capitalize">{props.children}</ParagraphHeading>
      <Paragraph>
        <Pills pills={props.pills} />
      </Paragraph>
    </Fragment>
  );
}

export default PillParagraph;
