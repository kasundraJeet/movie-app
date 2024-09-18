import { ApiRequest } from "~/helper/ApiRequest";

const API = process.env.API_DOMAIN;

export async function GET(req, { params }) {
  const { id } = params;

  var data = await ApiRequest(`${API}/tv/${id}?language=en-US`);
  var images = await ApiRequest(`${API}/tv/${id}/images`);
  var keywords = await ApiRequest(`${API}/tv/${id}/keywords`);
  var videos = await ApiRequest(`${API}/tv/${id}/videos`);
  var reviews = await ApiRequest(`${API}/tv/${id}/reviews?language=en-US&page=1`);
  var recommendations = await ApiRequest(`${API}/tv/${id}/recommendations?language=en-US&page=1`);
  var credits = await ApiRequest(`${API}/tv/${id}/aggregate_credits?language=en-US`);

  const modifyData = {
    detail: data,
    images: images,
    keywords: keywords.results.length > 0 ? keywords.results : [],
    videos: videos.results.length > 0 ? videos.results : [],
    reviews: reviews.results.length > 0 ? reviews.results : [],
    recommendations: recommendations.results.length > 0 ? recommendations.results : [],
    credits: {
        cast : credits.cast.length > 0 ? credits.cast : 0,
        crew : credits.crew.length > 0 ? credits.crew : 0,
    },
  };

  return Response.json(modifyData);
}