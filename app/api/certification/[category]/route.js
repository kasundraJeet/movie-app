import { ApiRequest } from "~/helper/ApiRequest";

const API = process.env.API_DOMAIN;

export async function GET(req, { params }) {
  const { category } = params;

  let type;

  switch (category) {
    case "movie":
    case "film":
      type = "movie";
      break;

    case "tv":
    case "tv-show":
    case "television-show":
      type = "tv";
      break;

    default:
      type = "movie";
  }

  const response = await ApiRequest(`${API}/certification/${type}/list`);

  let data;

  switch (category) {
    case "movie":
    case "tv":
    case "tv-show":
    case "television-show":
    case "film":
      data = response?.certifications || [];
      break;

    default:
      data = {};
  }

  return Response.json(data);
}
