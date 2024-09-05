import { ApiRequest } from "~/helper/ApiRequest";

const API = process.env.API_DOMAIN;

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get('page') || 1;

  let data = await ApiRequest(`${API}/person/popular?page=${page}`);
  return Response.json(data);
}
