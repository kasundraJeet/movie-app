import { ApiRequest } from "~/helper/ApiRequest";
import { differenceInYears } from 'date-fns';

const API = process.env.API_DOMAIN;

export async function GET(req, { params }) {
  const { category } = params;
  const { searchParams } = new URL(req.url);
  const page = searchParams.get('page') || 1;

  let url = `${API}/person/popular?language=en-US&page=${page}`;
  let data = await ApiRequest(url);

  if (category === 'female-celebrity') {
    data.results = data.results.filter(person => person.gender === 1);
  } else if (category === 'male-celebrity') {
    data.results = data.results.filter(person => person.gender === 2);
  } else if (category === 'indian-male-celebrity') {
    data.results = data.results.filter(person => person.gender === 2 && person.known_for_department === 'Acting' && person.place_of_birth.includes('India'));
  } else if (category === 'indian-female-celebrity') {
    data.results = data.results.filter(person => person.gender === 1 && person.known_for_department === 'Acting' && person.place_of_birth.includes('India'));
  } else if (category === 'month-birthday') {
    const currentMonth = new Date().getMonth() + 1;
    data.results = data.results.filter(person => new Date(person.birthday).getMonth() + 1 === currentMonth);
  } else if (category === 'today-birthday') {
    const today = new Date().toISOString().slice(5, 10);
    data.results = data.results.filter(person => person.birthday && person.birthday.slice(5, 10) === today);
  } else if (category === 'young-celebrity') {
    data.results = data.results.filter(person => differenceInYears(new Date(), new Date(person.birthday)) < 30);
  } else if (category === 'oldest-celebrity') {
    data.results = data.results.sort((a, b) => new Date(a.birthday) - new Date(b.birthday)).slice(0, 10);
  } else if (category === 'bollywood-celebrity') {
    data.results = data.results.filter(person => person.known_for.some(movie => movie.original_language === 'hi'));
  } else if (category === 'hollywood-celebrity') {
    data.results = data.results.filter(person => person.known_for.some(movie => movie.original_language === 'en'));
  }

  return Response.json(data);
}
