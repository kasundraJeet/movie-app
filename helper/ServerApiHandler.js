import axios from "axios";

const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const ServerApiHandler = async (url) => {
  try {
    const response = await axios.get(`${NEXT_PUBLIC_BASE_URL}/${url}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
