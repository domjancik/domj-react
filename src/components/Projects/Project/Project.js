import React, { useState } from "react";

import { get } from "lodash";
import ParagraphHeading from "../../UI/Headings/ParagraphHeading";
import Paragraph from "../../UI/Paragraph/Paragraph";
import PillParagraph from "../../UI/PillParagraph/PillParagraph";

const PILL_SOURCES = ["tags", "roles", "technologies", "collaborators"];

function Project(props) {
  const [showDetails, setShowDetails] = useState(false);

  // console.log("Props:");
  // console.log(props);

  const pills = PILL_SOURCES.map((source) => {
    const sourceItems = get(props, source, []);

    return sourceItems.length ? (
      <PillParagraph pills={sourceItems}>{source}</PillParagraph>
    ) : null;
  });

  return (
    <div className="md:w-1/2 lg:w-1/3 p-4 border-dotted border-4 border-teal-200 rounded-md m-4 inline-block">
      {/* <img src={image} alt="Description" title="Description" /> */}
      <img
        className="rounded"
        src={get(props, "heroImage.fields.file.url", "NOTFOUND")}
        alt="Description"
        title="Description"
      />
      <div className="text-xs text-right text-white -mt-6 pr-3">{new Date(props.startDate).getFullYear()}</div>
      <h1 className="text-2xl text-center mt-4 mb-2">{props.title} @ {props.organization}</h1>
      <ParagraphHeading>Description</ParagraphHeading>
      <Paragraph>{props.description}</Paragraph>

      {pills}
    </div>
  );
}

export default Project;
