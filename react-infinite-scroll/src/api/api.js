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
        limit: 5,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
