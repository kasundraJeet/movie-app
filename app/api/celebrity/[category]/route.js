import { ApiRequest } from "~/helper/ApiRequest";

const API = process.env.API_DOMAIN;


export async function GET(req, { params }) {
  const { category } = params;
  const { searchParams } = new URL(req.url);
  const page = searchParams.get('page') || 1;

  let url = `${API}/person/popular?language=en-US&page=${page}`;

  let data = await ApiRequest(url);

  if (category === 'female-celebrity') {
    data.results = data.results.filter(person => person.gender === 1);
  } else if (category === 'male-celebrity') {
    data.results = data.results.filter(person => person.gender === 2);
  }

  return Response.json(data);
}
