import React from "react";
import Layout from "./hoc/Layout/Layout";
import Projects from "./components/Projects/Projects";
import Hero from "./components/Hero/Hero";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import AuthStore from "./store/AuthStore/AuthStore";
import Collections from "./components/Collections/Collections";

function App() {
  return (
    <Router>
      <AuthStore>
        <Layout>
          <Hero />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/collections" component={Collections} />
            <Route path="/" component={Projects} />
          </Switch>
        </Layout>
      </AuthStore>
    </Router>
  );
}
export default App;
