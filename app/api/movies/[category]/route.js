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
    case "best-movies":
    case "highly-rated":
    case "all-time-favorites":
    case "fan-favorites":
      url = `${API}/movie/top_rated?language=en-US&page=${page}`;
      data = await ApiRequest(url);
      break;

    case "up-coming":
    case "up-coming-releases":
    case "soon-in-theaters":
    case "future-releases":
    case "anticipated-releases":
    case "coming-soon":
    case "new-releases-upcoming":
      url = `${API}/movie/upcoming?language=en-US&page=${page}`;
      data = await ApiRequest(url);
      break;

    case "popular":
    case "famous":
    case "trending-now":
    case "most-popular":
    case "blockbusters":
    case "audience-favorites":
    case "hit-movies":
      url = `${API}/movie/popular?language=en-US&page=${page}`;
      data = await ApiRequest(url);
      break;

    case "now-playing":
    case "latest":
    case "new-release":
    case "currently-showing":
    case "in-theaters-now":
    case "latest-releases":
    case "watch-now":
    case "new-in-theaters":
      url = `${API}/movie/now_playing?language=en-US&page=${page}`;
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
