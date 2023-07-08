import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const URL = import.meta.env.VITE_DOG_URL;

export const getDogs = async (page = 1, limit = 20) => {
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
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
