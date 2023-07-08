import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const URL = import.meta.env.VITE_DOG_URL;

export const getDogs = async () => {
  try {
    const response = await axios.get(URL, {
      headers: {
        "x-api-key": API_KEY,
      },
      params: {
        page: 1,
        limit: 10,
        order: "ASC",
      },
    });
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
