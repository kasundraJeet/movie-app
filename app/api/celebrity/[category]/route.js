import { ApiRequest } from "~/helper/ApiRequest";
import { differenceInYears } from "date-fns";

const API = process.env.API_DOMAIN;

export async function GET(req, { params }) {
  const { category } = params;
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || 1, 10);

  async function fetchAllPages() {
    let allResults = [];
    let currentPage = page;
    let totalPages = 1;

    let url = `${API}/person/popular?language=en-US&page=${currentPage}`;
    let data = await ApiRequest(url);

    allResults = data.results;
    totalPages = data.total_pages;

    while (currentPage < totalPages) {
      currentPage++;
      let nextPageUrl = `${API}/person/popular?language=en-US&page=${currentPage}`;
      let nextPageData = await ApiRequest(nextPageUrl);
      allResults = allResults.concat(nextPageData.results);
    }

    return allResults;
  }

  let allResults = await fetchAllPages();

  const detailedResults = await Promise.all(
    allResults.map(async (person) => {
      const detailUrl = `${API}/person/${person.id}?language=en-US`;
      const personDetails = await ApiRequest(detailUrl);
      return personDetails;
    })
  );

  if (category === "female-celebrity") {
    data.results = allResults.filter((person) => person.gender === 1);
  } else if (category === "male-celebrity") {
    data.results = allResults.filter((person) => person.gender === 2);
  } else if (category === "indian-male-celebrity") {
    data.results = detailedResults.filter(
      (person) =>
        person.gender === 2 &&
        person.known_for_department === "Acting" &&
        person.place_of_birth.includes("India")
    );
  } else if (category === "indian-female-celebrity") {
    data.results = detailedResults.filter(
      (person) =>
        person.gender === 1 &&
        person.known_for_department === "Acting" &&
        person.place_of_birth.includes("India")
    );
  } else if (category === "month-birthday") {
    const currentMonth = new Date().getMonth() + 1;

    const filteredResults = detailedResults.filter(
      (person) => new Date(person.birthday).getMonth() + 1 === currentMonth
    );

    data.results = allResults.filter((person) =>
      filteredResults.some((detailPerson) => detailPerson.id === person.id)
    );
  } else if (category === "today-birthday") {
    const today = new Date().toISOString().slice(5, 10);
    data.results = detailedResults.filter(
      (person) => person.birthday && person.birthday.slice(5, 10) === today
    );
  } else if (category === "young-celebrity") {
    data.results = detailedResults.filter(
      (person) => differenceInYears(new Date(), new Date(person.birthday)) < 30
    );
  } else if (category === "oldest-celebrity") {
    data.results = detailedResults
      .sort((a, b) => new Date(a.birthday) - new Date(b.birthday))
      .slice(0, 10);
  } else if (category === "bollywood-celebrity") {
    data.results = detailedResults.filter((person) =>
      person.known_for.some((movie) => movie.original_language === "hi")
    );
  } else if (category === "hollywood-celebrity") {
    data.results = detailedResults.filter((person) =>
      person.known_for.some((movie) => movie.original_language === "en")
    );
  }

  return Response.json(data);
}
