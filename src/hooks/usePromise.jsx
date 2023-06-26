import axios from "axios";
import { useEffect, useState } from "react";

function usePromise(page, limit = 45) {
  const URL = "https://api.thecatapi.com/v1/images/search";
  const API_KEY =
    "live_TMHkfzpN281MrIv3tbYggwCuoviA3a5CjNGvVIbY9bPIVbeSbTZ6rY5Ndnc2BbdP";

  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("000000");
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(URL, {
          headers: {
            "x-api-key": API_KEY,
          },
          params: {
            page: page,
            limit: limit,
            order: "ASC",
          },
        });
        setResolved(response.data);
        setLoading(false);

        console.log(response);
      } catch (e) {
        console.log(e.message);
        setLoading(false);

        setError(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page, limit]);

  console.log(page, limit);
  console.log(resolved);

  return { loading, resolved, error };
}

export default usePromise;
