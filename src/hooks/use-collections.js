import { useEffect, useState } from "react";
import DataSource from "../data/DataSource/DataSource";

export default function useCollections() {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    DataSource.fetchCollections().then((collections) =>
      setCollections(collections)
    );
  }, []);

  return collections;
}
