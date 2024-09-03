
import { APIFetcher } from "~/helper/APIFetcher";

export async function GET() {
  let data = await APIFetcher('https://api.themoviedb.org/3/person/popular?language=en-US&page=1');
  console.log("data ==>" , data);

  return Response.json(data);
}
