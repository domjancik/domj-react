import React, { useState, useEffect } from "react";
import DataSource from "../../data/DataSource/DataSource";
import Collection from "./Collection/Collection";

export default function Collections() {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    DataSource.fetchCollections().then((collections) =>
      setCollections(collections)
    );
  }, []);

  return (
    <div>
      {collections.map((collection) => (
        <Collection key={collection.sys.id} {...collection.fields} />
      ))}
    </div>
  );
}
