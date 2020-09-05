import React from "react";
import useQuery from "../../hooks/use-query";
import { useHistory } from "react-router-dom";
import { getLink } from "../../util/contentful-oauth";
import withAuth from "../../hoc/Auth/withAuth";

export default withAuth(function Login({ login }) {
  const query = useQuery();
  const history = useHistory();
  let accessToken = query.get("access_token");

  if (!accessToken) {
    window.location = getLink();
  } else {
    login(accessToken);
    history.replace("/");
  }

  return <div>Logging in...</div>;
});
