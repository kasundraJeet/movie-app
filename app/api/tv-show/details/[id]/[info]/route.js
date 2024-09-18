import { ApiRequest } from "~/helper/ApiRequest";

const API = process.env.API_DOMAIN;

export async function GET(req, { params, searchParams }) {
  const { id, info } = params;
  const page = searchParams?.page || 1;

  let data;
  let url;

  switch (info) {
    case "credits":
    case "team":
    case "cast":
    case "crew":
      url = `${API}/tv/${id}/aggregate_credits?language=en-US`;
      data = await ApiRequest(url);
      break;

    case "reviews":
    case "comments":
    case "feedback":
      url = `${API}/tv/${id}/reviews?language=en-US&page=${page}`;
      data = await ApiRequest(url);
      break;


    case "video":
    case "videos":
    case "show-scene":
    case "clips":
      url = `${API}/tv/${id}/videos?language=en-US`;
      data = await ApiRequest(url);
      break;

    case "images":
    case "show-image":
    case "pictures":
    case "posters":
    case "stills":
    case "backdrops":
      url = `${API}/tv/${id}/images`;
      data = await ApiRequest(url);
      break;

    case "similar":
    case "related":
    case "related-movies":
      url = `${API}/movie/${id}/similar?language=en-US&page=${page}`;
      data = await ApiRequest(url);
      break;

    case "recommendations":
    case "suggestions":
    case "recommended-show":
      url = `${API}/tv/${id}/recommendations?language=en-US&page=${page}`;
      data = await ApiRequest(url);
      break;

    case "keywords":
    case "tags":
    case "topics":
      url = `${API}/tv/${id}/keywords`;
      data = await ApiRequest(url);
      break;

    default:
      return new Response("Invalid info parameter", { status: 400 });
  }

  return Response.json(data);
}
