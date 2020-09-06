import React from "react";
import Collection from "../Collection/Collection";
import { useEffect } from "react";
import { useState } from "react";
import DataSource from "../../../data/DataSource/DataSource";

export default function CollectionDetail({ id }) {
  const [Collection, setCollection] = useState({});

  useEffect(() => {
    DataSource.fetchCollection(id).then((collection) =>
      setCollection(collection)
    );
  }, []);

  return <Collection projects={collection.projects} />;
}
