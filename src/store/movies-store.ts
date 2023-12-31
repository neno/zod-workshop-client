import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';
import { MovieType, NewMovieType, movieSchema } from '../lib/types';
import { PlaylistError } from '../lib/exceptions';
import { toast } from 'react-toastify';

const preventDuplicate = (movies: MovieType[], data: NewMovieType) => {
  if (movies.some((movie) => movie.key === JSON.stringify(data))) {
    throw new PlaylistError({
      name: 'DuplicateMovieError',
      message: 'Movie already exists in the playlist',
      cause: data
    });
  }

  return false;
};

const validateMovie = (data: NewMovieType | MovieType) => {
  try {
    movieSchema.omit({ id: true, key: true }).parse(data);
  } catch (error) {
    throw new PlaylistError({
      name: 'MovieValidationError',
      message: 'Movie validation failed',
      cause: error
    })
  }
}

const addMovie = (movies: MovieType[], data: NewMovieType) => {
  validateMovie(data);
  preventDuplicate(movies, data);

  toast.success('Movie added to the playlist');
  return [
    ...movies,
    {
      id: uuidv4(),
      ...data,
      key: JSON.stringify(data)
    }
  ]
};

const updateMovie = (movies: MovieType[], data: MovieType) => {
  validateMovie(data);

  toast.success('Movie was successully updated');
  return (
    movies.map((movie) => (movie.id === data.id ? { ...movie, ...data } : movie))
  )
};

const deleteMovie = (movies: MovieType[], id: string) => {
  toast.success('Movie was deleted from the playlist');
  return (movies.filter((movie) => movie.id !== id))
};

type Store = {
  movies: MovieType[];
  newMovie: NewMovieType;
  addMovie: (data: NewMovieType) => void;
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
    addMovie: (data) => set((state) => ({ ...state, movies: addMovie(state.movies, data) })),
    updateMovie: (data) => set((state) => ({ ...state, movies: updateMovie(state.movies, data) })),
    deleteMovie: (id) => set((state) => ({ ...state, movies: deleteMovie(state.movies, id) }))
  })
);

export default useMoviesStore;
