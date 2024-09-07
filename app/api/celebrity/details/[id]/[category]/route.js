import { ApiRequest } from "~/helper/ApiRequest";

const API = process.env.API_DOMAIN;

export async function GET(req, { params }) {
  const { id, category } = params;
  var details = await ApiRequest(`${API}/person/${id}?language=en-US`);
  var images = await ApiRequest(`${API}/person/${id}/images`);
  var movie = await ApiRequest(
    `${API}/person/${id}/movie_credits?language=en-US`
  );
  var tv = await ApiRequest(`${API}/person/${id}/tv_credits?language=en-US`);

  let data;

  data = {
    details: details,
  };

  switch (category) {
    case "movies":
      data.results = movie.cast.length > 0 ? movie.cast : [];
      break;

    case "tv-show":
      data.results = tv.cast.length > 0 ? tv.cast : [];
      break;

    case "images":
      data.results = images.profiles.length > 0 ? images.profiles : [];
      break;

    default:
      data = {
        details: details,
      };
  }

  return Response.json(data);
}
