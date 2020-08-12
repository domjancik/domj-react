import React, { useState } from "react";

import { get } from "lodash";
import ParagraphHeading from "../../UI/Headings/ParagraphHeading";
import Paragraph from "../../UI/Paragraph/Paragraph";
import PillParagraph from "../../UI/PillParagraph/PillParagraph";
import Pills from "../../UI/Pill/Pills";
import Emoji from "../../UI/Emoji/Emoji";

const PILL_SOURCES = ["responsibilities", "technologies", "collaborators"];

function Project(props) {
  const [showDetails, setShowDetails] = useState(false);

  // console.log("Props:");
  // console.log(props);

  const handleDetailsToggled = () => {
    setShowDetails(!showDetails);
  };

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

  const tags = getPills("tags").join(", ");
  const featured = props.featured ? (
    <Emoji label="Favorite Star">⭐ </Emoji>
  ) : null;

  let img = (
    <img
      className="rounded w-full"
      src={imgSrc}
      alt="Description"
      title="Description"
    />
  );

  const hasLink = !!props.links;

  if (hasLink) {
    img = (
      <a href={props.links[0]} target="_blank" rel="noopener noreferrer">
        {img}
      </a>
    );
  }

  return (
    // <div className="md:w-1/2 lg:w-1/3 p-2 box-border inline-block">
    <div className="p-2 md:p-4 border-dotted border-4 border-teal-200 rounded-md box-border">
      {/* <img src={image} alt="Description" title="Description" /> */}
      {img}
      <div
        className="text-xs text-white -mt-6 z-50 relative p-3 rounded"
        style={{ backgroundColor: "black" }}
      >
        <div className="float-left -mt-2">
          {featured}
          {tags}
        </div>

        <div className="float-right -mt-2">
          {new Date(props.startDate).getFullYear()}
        </div>
      </div>
      <div className="mb-2 mt-4 text-center">
        <h1 className="text-2xl">{title}</h1>
        {props.client ? <h2 className="text-lg">for {props.client}</h2> : null}
      </div>
      {/* <ParagraphHeading>Description</ParagraphHeading> */}
      <Paragraph>{props.description}</Paragraph>

      <div className="text-center">
        <button
          className="text-2xl hover:bg-teal-200 hover:text-white border-none"
          style={{ width: "100%" }}
          onClick={handleDetailsToggled}
        >
          {showDetails ? "-" : "+"}
        </button>
      </div>
      {showDetails ? pills : null}
    </div>
    // </div>
  );
}

export default Project;
