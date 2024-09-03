import axios from "axios";

const API_KEY = process.env.API_KEY;

export const APIFetcher = async (method, url) => {
  const headers = {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  };

  try {
    const response = await axios({
      method,
      url,
      headers,
    });

    return response.data;
  } catch (error) {
    console.error(`API Request failed: ${error.message}`);
    throw error;
  }
};
