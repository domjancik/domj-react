import * as ContentfulClient from '../../util/contentful-client'

import * as ContentTypes from './DataTypes'

export const fetchProjects = () => ContentfulClient.getEntriesOfType(ContentTypes.PROJECT)
export const fetchProject = ( id ) => {throw new Error('Not Implemented')}
export const fetchCollections = () => ContentfulClient.getEntriesOfType(ContentTypes.PROJECT_COLLECTION, {'fields.private[ne]': 'true'})
export const fetchCollectionTitles = () => ContentfulClient.getEntriesOfType(ContentTypes.PROJECT_COLLECTION, {'fields.private[ne]': 'true', select: 'sys.id,fields.title,fields.slug'})
export const fetchCollection = ( id ) => {throw new Error('Not Implemented')}
export const fetchCollectionBySlug = ( slug ) => ContentfulClient.getEntryOfTypeBySlug( ContentTypes.PROJECT_COLLECTION, slug )

const DataSource = {
    fetchProjects,
    fetchProject,
    fetchCollections,
    fetchCollectionTitles,
    fetchCollection,
    fetchCollectionBySlug
}

export default DataSource
