import Backend from "./Backend";

export const getTagsFromQuery = (query) => (
  Backend.call("tags/query", {query})
)

export const getNormalizedTags = (tag) => (
  Backend.call("tags/normalize", {tag})
)