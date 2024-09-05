import { ApiRequest } from "~/helper/ApiRequest";

export async function GET(req, { params }) {
  const { category } = params;
  let url = `https://api.themoviedb.org/3/person/popular?language=en-US&page=4`;

  let data = await ApiRequest(url);

  if (category === 'female-celebrity') {
    data.results = data.results.filter(person => person.gender === 1);
  } else if (category === 'male-celebrity') {
    data.results = data.results.filter(person => person.gender === 2);
  }

  return Response.json(data);
}
