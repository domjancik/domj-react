import React, { useState, useEffect } from "react";
import DataSource from "../../data/DataSource/DataSource";
import Collection from "./Collection/Collection";
import Spinner from '../UI/Spinner/Spinner'

export default function Collections() {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    DataSource.fetchCollections().then((collections) =>
      setCollections(collections)
    );
  }, []);

  if (collections.length === 0) return <Spinner />

  return (
    <div>
      {collections.map((collection) => (
        <Collection key={collection.sys.id} {...collection.fields} />
      ))}
    </div>
  );
}
