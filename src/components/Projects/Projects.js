import React, { PureComponent } from 'react'
import Project from './Project/Project'

class Projects extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            projects: [
                {
                    title: "First Project",
                    description: "Lorem ipsum"
                }
            ]
        }
    }

    render() {
        return (
            <div><Project {...this.state.projects[0]}/></div>
        )
    }
}

export default Projects