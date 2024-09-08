import { ApiRequest } from "~/helper/ApiRequest";

const API = process.env.API_DOMAIN;

export async function GET(req, { params }) {
  const { id } = params;
  console.log(id)
  var data = await ApiRequest(`${API}/movie/${id}?language=en-US`);
  var images = await ApiRequest(`${API}/movie/${id}/images`);
  var credits  = await ApiRequest(
    `${API}/movie/${id}/credits?language=en-US`
  );
  var keywords = await ApiRequest(`${API}/movie/${id}/keywords`);
  const modifyData = {
    detail: data,
    images: images.backdrops.length > 0 ? images.backdrops : [],
    credits: credits.cast.length > 0 ? credits.cast : [],
    keywords: keywords.keywords.length > 0 ? keywords.keywords : [],
  };
  return Response.json(modifyData);
}


// Recommendations
// Similar