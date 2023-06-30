import { z } from 'zod';
import { NewMovieType, TmdbMovieItemType, tmdbSearchResultSchema } from './types';
import { SearchError } from './exceptions';
import { toast } from 'react-toastify';

export async function searchMovies(searchTerm: string): Promise<NewMovieType[]> {
  try {
    // fetch data from TMDB
    const url = `https://api.themoviedb.org/3/search/movie?api_key=00f3f32198696caff437631c007a7548&query=${searchTerm}`;
    const res = await fetch(url);
    const apiData = await res.json();

    // validate apiData -> throw error if invalid
    const validatedResult = tmdbSearchResultSchema.parse(apiData);

    // map data to our schema
    const movieItems: NewMovieType[] = validatedResult.results.map((movie: TmdbMovieItemType) => ({
      title: movie.title,
      poster_path: movie.poster_path ?? null,
      overview: movie.overview ?? null,
      release_date: movie.release_date ?? null,
    }));

    return movieItems;

  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      // toast.error('Error validating data from TMDB. Received data didn`t match expectations.');
      throw new SearchError({
        name: 'SearchValidationError',
        message: 'Error validating data from TMDB. Received data didn`t match expectations.',
        cause: error,
      });
    } else {
      throw new SearchError({
        name: 'SearchFetchingError',
        message: 'Error fetching data from TMDB.',
        cause: error,
      });
    }
  }
}
