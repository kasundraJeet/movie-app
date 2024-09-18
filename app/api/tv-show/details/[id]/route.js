import { ApiRequest } from "~/helper/ApiRequest";

const API = process.env.API_DOMAIN;

export async function GET(req, { params }) {
  const { id } = params;

  var data = await ApiRequest(`${API}/tv/${id}?language=en-US`);
  var images = await ApiRequest(`${API}/tv/${id}/images`);
  var keywords = await ApiRequest(`${API}/tv/${id}/keywords`);
  var videos = await ApiRequest(`${API}/tv/${id}/videos`);

  const modifyData = {
    detail: data,
    images: images,
    keywords: keywords.results.length > 0 ? keywords.results : [],
    videos: videos.results.length > 0 ? videos.results : [],
  };

  return Response.json(modifyData);
}