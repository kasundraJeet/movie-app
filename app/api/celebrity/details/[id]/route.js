import { ApiRequest } from "~/helper/ApiRequest";

const API = process.env.API_DOMAIN;

export async function GET(req ,{params}) {
  const { id } = params;
  let data = await ApiRequest(`${API}/person/popular?person_id=${id}?language=en-US`);
  return Response.json(data);
}
