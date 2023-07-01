import axios from "axios";
import { useEffect, useState } from "react";

const SEARCH_URL = "https://dapi.kakao.com/v2/search";

const usePromise = (category, query) => {
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = () => {
    setLoading(true);
    try {
      const response = axios(`${SEARCH_URL}/${category}`, {
        headers: {
          Authorization: "KakaoAK 71c61a3d36993c8292e525ec98e0fb22",
        },
        params: {
          query: query,
          sort: "accuracy",
          size: 10,
        },
      });
      setResolved(response.data);
      console.log(resolved);
    } catch (e) {
      setError(e);
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [loading, resolved, error];
};

export default usePromise;
