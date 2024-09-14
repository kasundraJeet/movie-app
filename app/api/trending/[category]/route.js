import { ApiRequest } from "~/helper/ApiRequest";

const API = process.env.API_DOMAIN;
const PAGE_LIMIT = parseInt(process.env.PAGE_LIMIT);

export async function GET(req, { params }) {
  const { category } = params;
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || 1);

  let data = { results: [], total_results: 0, page: 1 };

  let url;

  switch (category) {
    case "movies-today":
    case "movies":
      url = `${API}/trending/movie/day?language=en-US&page=${page}`;
      data = await ApiRequest(url);
      break;

    case "movies-this-week":
      url = `${API}/trending/movie/week?language=en-US&page=${page}`;
      data = await ApiRequest(url);
      break;

    case "celebrity-today":
    case "celebrity":
    case "people":
      url = `${API}/trending/person/day?language=en-US&page=${page}`;
      data = await ApiRequest(url);
      break;

    case "celebrity-this-week":
      url = `${API}/trending/person/week?language=en-US&page=${page}`;
      data = await ApiRequest(url);
      break;

    case "tv-show-today":
    case "tv-show":
      url = `${API}/trending/tv/day?language=en-US&page=${page}`;
      data = await ApiRequest(url);
      break;

    case "tv-show-this-week":
      url = `${API}/trending/tv/week?language=en-US&page=${page}`;
      data = await ApiRequest(url);
      break;

    default:
      data.results = [];
      data.total_results = 0;
      data.page = 1;
  }

  return Response.json({
    total_pages:
      data.total_pages > PAGE_LIMIT ? PAGE_LIMIT : data.total_results,
    total_results: data.total_results,
    page: data.page,
    results: data.results,
  });
}
