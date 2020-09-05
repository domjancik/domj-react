import React, { PureComponent, Fragment } from "react";
import Project from "./Project/Project";
import * as contentful from "contentful";
import Emoji from "../UI/Emoji/Emoji";
import Masonry from "react-masonry-css";
import { Flipper, Flipped } from "react-flip-toolkit";
import Spinner from "../UI/Spinner/Spinner";

const breakpointColumnsObj = {
  default: 3,
  1024: 2,
  640: 1,
};

class Projects extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
      sortDirection: true,
      loading: true,
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
      loading: false,
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

    const featuredProjects = sortedProjects.filter(
      (project) => project.fields.featured
    );
    const nonFeaturedProjects = sortedProjects.filter(
      (project) => !project.fields.featured
    );
    // sortedProjects.sort(
    //   (a, b) => a.fields.featured - b.fields.featured
    // );

    return featuredProjects.concat(nonFeaturedProjects);
  };

  handleClicked = () => {
    this.setState((state) => ({ sortDirection: !state.sortDirection }));
  };

  render() {
    if (this.state.loading) return <Spinner />;

    const projects = this.sortProjects(this.state.projects);
    const projectElements = projects.map((project) => {
      return (
        <Flipped key={project.sys.id} flipId={project.sys.id}>
          {(flippedProps) => {
            return <Project {...project.fields} flippedProps={flippedProps} />;
          }}
        </Flipped>
      );
    });

    const flipperKey = projects.map((project) => project.sys.id).join("");

    const directionBaseClasses =
      "transform transition duration-500 inline-block ";

    return (
      <Fragment>
        <div className="text-center sticky top-0 z-50 bg-white bg-opacity-25">
          <button
            onClick={this.handleClicked}
            className="text-xl focus:outline-none focus:shadow-outline rounded"
          >
            <Emoji label="Newborn">👶</Emoji>
            <Emoji
              label="Direction"
              className={
                directionBaseClasses +
                (this.state.sortDirection ? "rotate-0" : "rotate-180")
              }
            >
              ⏩
            </Emoji>
            <Emoji label="Eldest">👴</Emoji>
          </button>
        </div>
        <hr />
        <Flipper flipKey={flipperKey}>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {projectElements}
          </Masonry>
        </Flipper>
      </Fragment>
    );
  }
}

export default Projects;
