import React from "react";
import { useParams } from "react-router-dom";
import CollectionDetail from "../CollectionDetail/CollectionDetail";

export default function KeyedCollectionDetail() {
  const { id } = useParams();

  return <CollectionDetail key={id} />;
}
