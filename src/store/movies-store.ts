import crypto from "crypto";
import { create } from 'zustand';
import { MovieType, NewMovieType } from '../lib/types';

const addMovie = (movies: MovieType[], data: NewMovieType) => [
  ...movies,
  {
    id: crypto.randomUUID(),
    ...data
  }
];

const updateMovie = (movies: MovieType[], data: MovieType) => (
  movies.map((movie) => (movie.id === data.id ? { ...movie, ...data } : movie))
);

const deleteMovie = (movies: MovieType[], id: string) => movies.filter((movie) => movie.id !== id);

type Store = {
  movies: MovieType[];
  newMovie: NewMovieType;
  setMovies: (movies: MovieType[]) => void;
  addMovie: () => void;
  updateMovie: (data: MovieType) => void;
  deleteMovie: (id: string) => void;
};

export const useMoviesStore = create<Store>(
  (set): Store => ({
    movies: [],
    newMovie: {
      title: '',
      poster_path: null,
      release_date: null,
      overview: null,
    },
    setMovies: (movies) => set((state) => ({ ...state, movies })),
    addMovie: () => set((state) => ({ ...state, movies: addMovie(state.movies, state.newMovie) })),
    updateMovie: (data) => set((state) => ({ ...state, movies: updateMovie(state.movies, data) })),
    deleteMovie: (id) => set((state) => ({ ...state, movies: deleteMovie(state.movies, id) }))
  })
);

export default useMoviesStore;
