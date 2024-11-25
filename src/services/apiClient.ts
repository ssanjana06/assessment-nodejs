import axios from "axios";

// import { moviesMock } from "../mock/movieMock";
// import { creditsMock } from "../mock/creditMock";

const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (year: string, page: number) => {
  const url = `${BASE_URL}/discover/movie?language=en-US&page=${page}&primary_release_year=${year}&sort_by=popularity.desc`;
  try {
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${process.env.ACCESS_TOKEN}` },
    });
    // console.log('movies data', response.data)
    return response.data;
  } catch (error) {
    console.warn("API call failed. Returning mock movie data.", error);
    // return moviesMock;
  }
};

export const fetchCredits = async (movieId: number) => {
  const url = `${BASE_URL}/movie/${movieId}/credits`;
  try {
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${process.env.ACCESS_TOKEN}` },
    });

    // console.log('credits data', response.data)
    return response.data;
  } catch (error) {
    console.warn(
      `Failed to fetch credits for movie ID ${movieId}. Returning mock data.`,
      error
    );
    // return creditsMock;
  }
};
