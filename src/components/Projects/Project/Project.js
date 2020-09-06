import React, { useState, Fragment } from "react";

import { get } from "lodash";
import Paragraph from "../../UI/Paragraph/Paragraph";
import PillParagraph from "../../UI/PillParagraph/PillParagraph";
import Emoji from "../../UI/Emoji/Emoji";
import Fade from "react-reveal/Fade";
import withAuth from "../../../hoc/Auth/withAuth";
import { useEffect } from "react";

const PILL_SOURCES = ["responsibilities", "technologies", "collaborators"];

function truncate(str, n) {
  return str.length > n ? str.substr(0, n - 1) + "…" : str;
}

function Project(props) {
  const [showDetails, setShowDetails] = useState(false);
  const [hoveringImage, setHoveringImage] = useState(false);
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (props.opened) {
      setTimeout(() => {
        setShowDetails(true);
      }, 10);
    }
  }, []);

  const handleImageEnter = () => {
    setHoveringImage(true);
  };

  const handleImageLeave = () => {
    setHoveringImage(false);
  };

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

  let imgDescription = get(props, "heroImage.fields.description", "An image");

  let img = (
    <img
      className="rounded w-full"
      src={imgSrc}
      alt={imgDescription}
      title={imgDescription}
      onMouseEnter={handleImageEnter}
      onMouseLeave={handleImageLeave}
    />
  );

  const hasLink = !!props.links;
  let link = "";

  if (hasLink) {
    img = (
      <a href={props.links[0]} target="_blank" rel="noopener noreferrer">
        {img}
      </a>
    );

    link = props.links[0].replace(/https?:\/\//gi, "");
    link = link.replace(/\/$/gi, "");
    link = truncate(link, 30);
  }

  const editBar = (
    <input
      type="checkbox"
      name="selected"
      checked={selected}
      onChange={() => setSelected(!selected)}
      id={props.id}
    />
  );

  return (
    <div
      className="p-2 md:p-4 rounded-md box-border border-dotted border-4 border-teal-200"
      {...props.flippedProps}
    >
      {props.isAuthenticated ? editBar : null}

      <div
        className={
          hasLink
            ? "transition duration-200 transform hover:-translate-y-1 shadow-xs hover:shadow-md"
            : null
        }
      >
        {img}
        <div
          className="text-xs text-white -mt-6 z-10 relative p-3 rounded pointer-events-none"
          style={{ backgroundColor: "black" }}
        >
          <div className="float-left -mt-2">
            {featured}
            {tags}
          </div>

          <div className="float-right -mt-2">
            {new Date(props.startDate).getFullYear()}
          </div>

          {hasLink ? (
            <div
              className={
                "transition duration-200 text-center -mt-10 relative text-white p-1 " +
                (hoveringImage ? "opacity-100" : "opacity-25")
              }
            >
              open {link}
            </div>
          ) : null}
        </div>
      </div>
      <div className="mb-2 mt-4 text-center">
        <h1 className="text-2xl">{title}</h1>
        {props.client ? <h2 className="text-lg">for {props.client}</h2> : null}
      </div>
      <Paragraph>{props.description}</Paragraph>

      {!props.opened ? (
        <div className="text-center">
          <button
            className="transition duration-200 text-2xl rounded hover:bg-teal-200 hover:text-white border-none focus:outline-none focus:shadow-outline"
            style={{ width: "100%" }}
            onClick={handleDetailsToggled}
          >
            {showDetails ? "-" : "+"}
          </button>
        </div>
      ) : null}

      <Fade collapse when={showDetails} duration="25">
        <Fragment>{pills}</Fragment>
      </Fade>
    </div>
  );
}

export default withAuth(Project);
