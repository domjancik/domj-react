import React, { useState } from "react";

import { get } from "lodash";
import ParagraphHeading from "../../UI/Headings/ParagraphHeading";
import Paragraph from "../../UI/Paragraph/Paragraph";
import PillParagraph from "../../UI/PillParagraph/PillParagraph";
import Pills from "../../UI/Pill/Pills";

const PILL_SOURCES = ["responsibilities", "technologies", "collaborators"];

function Project(props) {
  const [showDetails, setShowDetails] = useState(false);

  // console.log("Props:");
  // console.log(props);

  const getPills = (source) => {
    return get(props, source, []);
  };

  const pills = PILL_SOURCES.map((source) => {
    const sourceItems = getPills(source);

    return sourceItems.length ? (
      <PillParagraph key={source} pills={sourceItems}>
        {source}
      </PillParagraph>
    ) : null;
  });

  let title = props.title;
  if (props.organization) title += ` @ ${props.organization}`;

  let imgSrc =
    get(props, "heroImage.fields.file.url", "NOTFOUND") +
    "?fm=jpg&fl=progressive&w=600&h=600";
  
  const tags = <Pills pills={getPills("tags")}/>;

  return (
    // <div className="md:w-1/2 lg:w-1/3 p-2 box-border inline-block">
    <div className="p-4 border-dotted border-4 border-teal-200 rounded-md box-border">
      {/* <img src={image} alt="Description" title="Description" /> */}
      <img
        className="rounded w-full"
        src={imgSrc}
        alt="Description"
        title="Description"
      />
      {/* <div>{tags}</div> */}
      <div className="text-xs text-right text-white -mt-6 pr-3">
        {new Date(props.startDate).getFullYear()}
      </div>
      <h1 className="text-2xl text-center mt-4 mb-2">{title}</h1>
      {/* <ParagraphHeading>Description</ParagraphHeading> */}
      <Paragraph>{props.description}</Paragraph>

      {pills}
    </div>
    // </div>
  );
}

export default Project;
