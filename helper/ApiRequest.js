import axios from "axios";

const API_KEY = process.env.API_TOKEN;

export const ApiRequest = async (url) => {
  const headers = {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  };

  try {
    const response = await axios.get(url, {
      headers,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
