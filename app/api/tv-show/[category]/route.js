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
    case "top-rated":
    case "top":
    case "best-tv-show":
    case "highly-rated":
    case "all-time-favorites":
    case "fan-favorites":
      url = `${API}/tv/top_rated?language=en-US&page=${page}`;
      data = await ApiRequest(url);
      break;

    case "popular":
    case "famous":
    case "trending-now":
    case "most-popular":
    case "audience-favorites":
    case "hit-tv-show":
      url = `${API}/tv/popular?language=en-US&page=${page}`;
      data = await ApiRequest(url);
      break;


    default:
      data.results = [];
      data.total_results = 0;
      data.page = 1;
  }

  return Response.json({
    total_pages: PAGE_LIMIT,
    total_results: data.total_results,
    page: data.page,
    results: data.results,
  });
}
