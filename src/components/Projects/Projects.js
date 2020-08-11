import React, { PureComponent } from "react";
import Project from "./Project/Project";
import * as contentful from "contentful";

class Projects extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
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
    this.setState({
      projects: response.items,
    });

    console.log(response.items);
  };

  render() {
    return (
      <div>
        {this.state.projects.map((project) => {
          return <Project {...project.fields} />;
        })}
      </div>
    );
  }
}

export default Projects;
