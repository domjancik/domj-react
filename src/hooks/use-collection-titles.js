import { useEffect, useState } from "react";
import DataSource from "../data/DataSource/DataSource";

export default function useCollectionTitles() {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    DataSource.fetchCollectionTitles().then((collections) =>
      setCollections(collections)
    );
  }, []);

  return collections;
}
