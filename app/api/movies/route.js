import { ApiRequest } from "~/helper/ApiRequest";

const API = process.env.API_DOMAIN;
const PAGE_LIMIT = process.env.PAGE_LIMIT;

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get('page') || 1;

  let data = await ApiRequest(`${API}/movie/popular?page=${page}`);
  return Response.json({
    total_pages : PAGE_LIMIT,
    total_results: data.total_results,
    page:data.page,
    results: data.results,
  });
}
