import React from "react";
import { getLink } from "../../../util/contentful-oauth";
import withAuth from "../../../hoc/Auth/withAuth";

export default withAuth(function LoginButton({ isAuthenticated, logout }) {
  return !isAuthenticated ? (
    <a href={getLink()}>{"<>"}</a>
  ) : (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        logout();
      }}
    >
      {"><"}
    </a>
  );
});
