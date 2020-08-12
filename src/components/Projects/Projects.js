import React, { PureComponent, Fragment } from "react";
import Project from "./Project/Project";
import * as contentful from "contentful";
import FixMe from "../UI/FixMe/FixMe";
import Emoji from "../UI/Emoji/Emoji";

class Projects extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
      sortDirection: true,
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
    //this.sortProjects(response.items);
    // console.log(sortedProjects);
    this.setState({
      projects: response.items,
    });
  };

  sortProjects = (items) => {
    let sortedProjects = [...items];
    sortedProjects.sort(
      (a, b) => new Date(a.fields.startDate) - new Date(b.fields.startDate)
    );

    if (this.state.sortDirection) {
      sortedProjects.reverse();
    }

    return sortedProjects;
  };

  handleClicked = () => {
    this.setState((state) => ({ sortDirection: !state.sortDirection }));
  };

  render() {
    const projects = this.sortProjects(this.state.projects);

    return (
      <Fragment>
        <div className="text-center sticky top-0">
          <button onClick={this.handleClicked} className="text-xl">
            <Emoji label="Sparkling new">✨</Emoji>
            <Emoji label="Direction">{this.state.sortDirection ? "⏩" : "⏪"}</Emoji>
            <Emoji label="Ancient spider webs">🕸</Emoji>
          </button>
        </div>
        <hr />
        <div>
          {projects.map((project) => {
            return <Project key={project.sys.id} {...project.fields} />;
          })}
        </div>
        <FixMe>md devices only one item visible per row</FixMe>
      </Fragment>
    );
  }
}

export default Projects;
