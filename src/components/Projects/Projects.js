import React, { PureComponent, Fragment } from "react";
import Project from "./Project/Project";
import * as contentful from "contentful";
import FixMe from "../UI/FixMe/FixMe";

class Projects extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
      sortDirection: false,
    };
  }

  client = contentful.createClient({
    space: "kexut3hz4rzv",
    accessToken: "fT6_oaDOfRx8g5aScDq6SZBLEWGDQAaNWWUn6MvIdxw",
  });

  componentDidMount() {
    this.fetchProjects().then(this.setProjects);
  }

  fetchProjects = () => this.client.getEntries({ content_type: "project" });

  setProjects = (response) => {
    const sortedProjects = response.items.sort(
      (a, b) => a.fields.startDate - b.fields.startDate
    );

    if (this.state.sortDirection) sortedProjects.reverse();

    this.sortProjects(response.items);
    this.setState({
      projects: sortedProjects,
    });

    // console.log(sortedProjects);
  };

  sortProjects = (items) => {
    const sortedProjects = items.sort(
      (a, b) => a.fields.startDate - b.fields.startDate
    );

    if (this.state.sortDirection) sortedProjects.reverse();

    this.setState({
      projects: sortedProjects,
    });

    console.log(sortedProjects);
  };

  handleClicked = () => {
    /*this.setState((prevState) => {
      sortDirection: prevState.sortDirection
    });*/

    const dir = this.state.sortDirection;
    this.setState({ sortDirection: !dir });
    this.sortProjects(this.state.projects);
  };

  render() {
    return (
      <Fragment>
        <div className="text-center sticky top-0">
          <button onClick={this.handleClicked} className="text-xl">
            ✨{this.state.sortDirection ? "⏪" : "⏩"}🕸{" "}
            <FixMe>Toggles sorting only on double click</FixMe>
          </button>
        </div>
        <hr />
        <div>
          {this.state.projects.map((project) => {
            return <Project {...project.fields} />;
          })}
        </div>
        <FixMe>md devices only one item visible per row</FixMe>
      </Fragment>
    );
  }
}

export default Projects;
