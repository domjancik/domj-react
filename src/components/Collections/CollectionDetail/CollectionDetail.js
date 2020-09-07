import React from "react";
import Collection from "../Collection/Collection";
import { useEffect } from "react";
import { useState } from "react";
import DataSource from "../../../data/DataSource/DataSource";
import { useParams } from "react-router-dom";
import Spinner from "../../UI/Spinner/Spinner";

export default function CollectionDetail() {
  const [collection, setCollection] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    setCollection(null)
    DataSource.fetchCollectionBySlug(id).then((collection) => {
      setCollection(collection);
    });
  }, [id]);

  if (!collection) return <Spinner />

  return <Collection {...collection.fields} />;
}
