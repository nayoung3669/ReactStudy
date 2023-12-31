import axios from "axios";
import { useEffect, useState } from "react";

const SEARCH_URL = "https://dapi.kakao.com/v2/search";

const usePromise = (category, query = "", size) => {
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    if (query) {
      try {
        const response = await axios(`${SEARCH_URL}/${category}`, {
          headers: {
            Authorization: `KakaoAK ${import.meta.env.VITE_REACT_API_KEY}`,
          },
          params: {
            query: query,
            sort: "accuracy",
            size: size,
          },
        });
        //자동완성할 키워드 추출 (title에서)
        setResolved(response.data.documents);
      } catch (e) {
        setError(e);
        console.log(e);
      }
      setLoading(false);
    } else {
      setResolved([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category, query]);

  return [loading, resolved, error];
};

export default usePromise;
