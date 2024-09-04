
import { ApiRequest } from "~/helper/ApiRequest";

export async function GET() {
  let data = await ApiRequest('https://api.themoviedb.org/3/person/popular?language=en-US&page=500');
  return Response.json(data);
}
