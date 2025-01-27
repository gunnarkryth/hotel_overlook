import { useState, useEffect } from "react";

export const useFetch = ({ endpoint, query }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const queryString = query
          ? "?" + new URLSearchParams(query).toString()
          : "";

        const response = await fetch(
          `http://localhost:4000/${endpoint}${queryString}`
        );
        
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.statusText}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, JSON.stringify(query)]);

  return { data, loading, error };
};
