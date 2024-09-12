  import { ApiRequest } from "~/helper/ApiRequest";
  import { differenceInYears } from "date-fns";

  const API = process.env.API_DOMAIN;
  const PAGE_LIMIT = parseInt(process.env.PAGE_LIMIT);

  export async function GET(req, { params }) {
    const { category } = params;
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || 1);

    let url = `${API}/person/popular?language=en-US&page=${page}`;
    let data = await ApiRequest(url);

    switch (category) {
      case "female-celebrity":
        data.results = data.results.filter((person) => person.gender === 1);
        break;

      case "male-celebrity":
        data.results = data.results.filter((person) => person.gender === 2);
        break;

      case "indian-male-celebrity":
        data.results = data.results.filter(
          (person) =>
            person.gender === 2 &&
            person.known_for_department === "Acting" &&
            person.place_of_birth.includes("India")
        );
        break;

      case "indian-female-celebrity":
        data.results = data.results.filter(
          (person) =>
            person.gender === 1 &&
            person.known_for_department === "Acting" &&
            person.place_of_birth.includes("India")
        );
        break;

      case "month-birthday":
        const currentMonth = new Date().getMonth() + 1;
        data.results = data.results.filter(
          (person) =>
            person.birthday &&
            new Date(person.birthday).getMonth() + 1 === currentMonth
        );
        break;

      case "today-birthday":
        const today = new Date().toISOString().slice(5, 10);
        data.results = data.results.filter(
          (person) => person.birthday && person.birthday.slice(5, 10) === today
        );
        break;

      case "young-celebrity":
        data.results = data.results.filter(
          (person) =>
            differenceInYears(new Date(), new Date(person.birthday)) < 30
        );
        break;

      case "oldest-celebrity":
        data.results = data.results
          .sort((a, b) => new Date(a.birthday) - new Date(b.birthday))
          .slice(0, 10);
        break;

      case "bollywood-celebrity":
        data.results = data.results.filter((person) =>
          person.known_for.some((movie) => movie.original_language === "hi")
        );
        break;

      case "hollywood-celebrity":
        data.results = data.results.filter((person) =>
          person.known_for.some((movie) => movie.original_language === "en")
        );
        break;

      default:
        data.results = [];
    }

    const results = data.results;

    return Response.json({
      total_pages: PAGE_LIMIT,
      total_results: data.total_results,
      page: data.page,
      results: results,
    });
  }
