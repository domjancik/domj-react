import * as contentful from "contentful";

const client = contentful.createClient({
  space: "kexut3hz4rzv",
  accessToken: "fT6_oaDOfRx8g5aScDq6SZBLEWGDQAaNWWUn6MvIdxw",
});

export default client;

export const getEntriesOfType = async (type, extraFilters = {}) => {
  // TODO Error handling
  const entries = await client.getEntries({ ...extraFilters, content_type: type });
  return entries.items;
  //return entries.items.map( XXX ) // TODO merge id with fields
};

export const getEntryOfTypeBySlug = async (content_type, slug) => {
  const entries = await client.getEntries({ content_type, 'fields.slug': slug });
  return entries.items[0];
};
