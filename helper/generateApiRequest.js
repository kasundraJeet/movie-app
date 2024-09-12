const API_KEY = process.env.API_TOKEN;
const API_DOMAIN = process.env.API_DOMAIN;

export const generateApiRequest = async (url) => {
  const headers = {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  };

  try {
    const response = await fetch(`${API_DOMAIN}${url}`, {
      headers,
    });


    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {

    console.error('Fetch error:', error);
    throw error;
  }
};
