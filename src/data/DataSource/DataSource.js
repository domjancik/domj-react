import * as ContentfulClient from '../../util/contentful-client'

import * as ContentTypes from './DataTypes'

export const fetchProjects = () => ContentfulClient.getEntriesOfType(ContentTypes.PROJECT)
export const fetchCollections = () => ContentfulClient.getEntriesOfType(ContentTypes.PROJECT_COLLECTION)

const DataSource = {
    fetchProjects,
    fetchCollections
}

export default DataSource
