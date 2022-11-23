import { useEffect, useState } from "react";

export const useFetch = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const json = fetch("DB.json");
      const res = json.json();
      setResponse(res);
    } catch (err) {
      setError(err);
    }
  }, []);

  return {
    response,
    error,
  };
};
