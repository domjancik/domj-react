import * as contentful from "contentful";

const client = contentful.createClient({
  space: "kexut3hz4rzv",
  accessToken: "fT6_oaDOfRx8g5aScDq6SZBLEWGDQAaNWWUn6MvIdxw",
});

export default client;

export const getEntriesOfType = async type => {
    // TODO Error handling
    const entries = await client.getEntries({content_type: type})
    return entries.items.map()
}