import React from "react";
import Icon from "../../UI/Icon/Icon";
import ExternalLink from "../../UI/ExternalLink/ExternalLink";

function SocialBar() {
  return (
    <div className="text-4xl mt-4 text-center">
      <ExternalLink href="https://github.com/domjancik">
        <Icon icon="github" />
      </ExternalLink>

      <ExternalLink href="https://twitter.com/domjancik">
        <Icon icon="twitter" />
      </ExternalLink>

      <ExternalLink href="https://www.instagram.com/domjancik">
        <Icon icon="instagram" />
      </ExternalLink>

      <ExternalLink href="https://www.linkedin.com/in/domjancik">
        <Icon icon="linkedin-in" />
      </ExternalLink>

      <ExternalLink href="mailto:hi@domj.net">
        <Icon icon="envelope" hover="envelope-open" prefix="far" />
      </ExternalLink>
    </div>
  );
}

export default SocialBar;
