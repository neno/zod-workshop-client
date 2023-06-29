import { z } from 'zod';

export const movieSchema = z.object({
  id: z.string().length(36),
  title: z.string().nonempty(),
  poster_path: z.string().nullable(),
  release_date: z.string().nullable(),
  overview: z.string().nullable(),
  key: z.string().nonempty(),
});

export type MovieType = z.infer<typeof movieSchema>;

export type NewMovieType = Omit<MovieType, 'id' | 'key'>;

export const tmdbMovieItemSchema = z.object({
  id: z.number(),
  title: z.string(),
  release_date: z.string().nullish(),
  overview: z.string().nullish(),
  poster_path: z.string().nullish(),
  adult: z.boolean(),
  backdrop_path: z.string().nullish(),
  genre_ids: z.array(z.number()).nullish(),
  video: z.boolean(),
  original_language: z.string().nullish(),
  original_title: z.string().nullish(),
  popularity: z.number().nullish(),
  vote_average: z.number().nullish(),
  vote_count: z.number().nullish(),
});

export type TmdbMovieItemType = z.infer<typeof tmdbMovieItemSchema>;

export const tmdbSearchResultSchema = z.object({
  page: z.number(),
  total_pages: z.number(),
  total_results: z.number(),
  results: z.array(
    tmdbMovieItemSchema
  ),
});

export type TmdbSearchResultsType = z.infer<typeof tmdbSearchResultSchema>

export type SearchErrorName = 'SearchFetchingError' | 'SearchValidationError';
export type PlaylistErrorName = 'DuplicateMovieError' | 'MovieValidationError';
