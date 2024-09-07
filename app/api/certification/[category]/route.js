import { ApiRequest } from "~/helper/ApiRequest";

const API = process.env.API_DOMAIN;

export async function GET(req, { params }) {
  const { category } = params;

  const response = await ApiRequest(`${API}/certification/${category}/list`);

  let data;

  switch (category) {
    case "movie":
    case "tv":
      data = response?.certifications || [];
      break;

    default:
      data = {};
  }

  return Response.json(data);
}
