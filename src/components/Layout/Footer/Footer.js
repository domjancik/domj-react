import React from "react";
import ExternalLink from "../../UI/ExternalLink/ExternalLink";
import Icon from "../../UI/Icon/Icon";

function Footer() {
  return (
    <div className="fixed text-right p-2 text-xs right-0 bottom-0 bg-white w-full z-50 hidden md:block">
      (c) 2020; created using React, TailwindCSS, Contentful and VS Code;{" "}
      <ExternalLink href="https://github.com/domjancik/domj-react">
        <Icon icon="github" />
      </ExternalLink>
    </div>
  );
}

export default Footer;
