import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

function usePromise(page, limit = 9) {
  const URL = "https://api.thecatapi.com/v1/images/search";
  const API_KEY =
    "live_TMHkfzpN281MrIv3tbYggwCuoviA3a5CjNGvVIbY9bPIVbeSbTZ6rY5Ndnc2BbdP";
  // 새로고침 하면 파람 가져와서 넣는 로직
  let location = useLocation();
  let pages = new URLSearchParams(location.search).get("page");
  const postpage = pages || page;
  ///
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(URL, {
          headers: {
            "x-api-key": API_KEY,
          },
          params: {
            page: postpage,
            limit: limit,
            order: "ASC",
          },
        });
        setResolved(response.data);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        setError(e);
      }
    };
    fetchData();
  }, [page, limit]);

  return [loading, resolved, error];
}

export default usePromise;
