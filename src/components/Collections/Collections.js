import React, { useState, useEffect } from "react";
import DataSource from "../../data/DataSource/DataSource";
import Spinner from "../UI/Spinner/Spinner";
import CollectionPreview from "./CollectionPreview/CollectionPreview";
import Masonry from "../../hoc/Masonry/Masonry";
import Breadcrumb from "../UI/Breadcrumb/Breadcrumb";
import AllProjectsPrompt from "../Layout/Navigation/AllProjectsPrompt/AllProjectsPrompt";

export default function Collections() {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    // TODO fetch only necessary results (title, first project)
    DataSource.fetchCollections().then((collections) =>
      setCollections(collections)
    );
  }, []);

  if (collections.length === 0) return <Spinner />;

  return (
    <>
      <Breadcrumb path="Collections" />

      <Masonry columns={2}>
        {collections.map((collection) => (
          <CollectionPreview key={collection.sys.id} {...collection.fields} />
        ))}
      </Masonry>

      <AllProjectsPrompt />
    </>
  );
}
