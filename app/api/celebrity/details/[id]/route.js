import { ApiRequest } from "~/helper/ApiRequest";

const API = process.env.API_DOMAIN;

export async function GET(req, { params }) {
  const { id } = params;
  var data = await ApiRequest(`${API}/person/${id}?language=en-US`);
  var images = await ApiRequest(`${API}/person/${id}/images`);
  var movie = await ApiRequest(
    `${API}/person/${id}/movie_credits?language=en-US`
  );
  var tv = await ApiRequest(`${API}/person/${id}/tv_credits?language=en-US`);
  const modifyData = {
    detail: data,
    tv: tv.cast.length > 0 ? tv.cast : [],
    movie: movie.cast.length > 0 ? movie.cast : [],
    images: images.profiles.length > 0 ? images.profiles : [],
  };
  return Response.json(modifyData);
}
