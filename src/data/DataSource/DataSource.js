import * as ContentfulClient from '../../util/contentful-client'

import * as ContentTypes from './DataTypes'

export const fetchProjects = () => ContentfulClient.getEntriesOfType(ContentTypes.PROJECT)
export const fetchProject = ( id ) => {throw 'Not Implemented'}
export const fetchCollections = () => ContentfulClient.getEntriesOfType(ContentTypes.PROJECT_COLLECTION)
export const fetchCollection = ( id ) => {throw 'Not Implemented'}
export const fetchCollectionBySlug = ( slug ) => {throw 'Not Implemented'}

const DataSource = {
    fetchProjects,
    fetchProject,
    fetchCollections,
    fetchCollection,
    fetchCollectionBySlug
}

export default DataSource
