import React from "react";
import Layout from "./hoc/Layout/Layout";
import Projects from "./components/Projects/Projects";
import Hero from "./components/Hero/Hero";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "./components/Login/Login";
import AuthStore from "./store/AuthStore/AuthStore";
import About from "./components/About/About";
import Navigation from "./components/Layout/Navigation/Navigation";
import Sticky from "./components/Layout/Sticky/Sticky";
import CollectionDetail from "./components/Collections/CollectionDetail/CollectionDetail";

function App() {
  return (
    <Router>
      <AuthStore>
        <Layout>
          <Hero />
          <Sticky>
            <Navigation />
          </Sticky>
          <div className="min-h-screen">
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/about" component={About} />
              <Route path="/projects/:id" component={CollectionDetail} />
              <Route path="/projects" component={Projects} />
              <Route path="/" children={<Redirect to="/projects" />} />
            </Switch>
          </div>
        </Layout>
      </AuthStore>
    </Router>
  );
}
export default App;
