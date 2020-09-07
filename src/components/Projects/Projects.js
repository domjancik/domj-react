import React, { PureComponent } from "react";
import Project from "./Project/Project";
import Masonry from "react-masonry-css";
import { Flipper, Flipped } from "react-flip-toolkit";
import Spinner from "../UI/Spinner/Spinner";
import DataSource from "../../data/DataSource/DataSource";
import FilterBar from "./FilterBar/FilterBar";
import { breakpointColumnsObj } from "../../util/masonry";

class Projects extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
      sortDirection: true,
      loading: true,
    };
  }

  componentDidMount() {
    DataSource.fetchProjects().then(this.setProjects);
  }

  setProjects = (projects) => {
    this.setState({
      projects: projects,
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
    // const breadcrumb = <Breadcrumb path="Projects/All" />;

    if (this.state.loading)
      return (
        <>
          {/* {breadcrumb} */}
          <Spinner />
        </>
      );

    const projects = this.sortProjects(this.state.projects);
    const projectElements = projects.map((project) => {
      return (
        <Flipped key={project.sys.id} flipId={project.sys.id}>
          {(flippedProps) => {
            // TODO possibly refactor, .fields tied to Contentful's API
            return <Project {...project.fields} flippedProps={flippedProps} />;
          }}
        </Flipped>
      );
    });

    const flipperKey = projects.map((project) => project.sys.id).join("");

    return (
      <>
        {/* {breadcrumb} */}
        <hr />
        <FilterBar
          sortDirection={this.state.sortDirection}
          toggleSortDirection={this.handleClicked}
        />
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
      </>
    );
  }
}

export default Projects;
