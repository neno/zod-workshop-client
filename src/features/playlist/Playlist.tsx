import { Button } from '../../components/Button';
import { Gallery } from '../../components/Gallery';
import { MovieCard } from '../../components/MovieCard';
import { IconTrash } from '../../components/icons';
import useMoviesStore from '../../store/movies-store';

export const Playlist = () => {
  const { movies, deleteMovie } = useMoviesStore();

  return (
    <section>
      <h2>Playlist</h2>
      <Gallery>
        {movies &&
          movies.length > 0 &&
          movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie}>
              <Button
                onClick={() => deleteMovie(movie.id)}
                title='Remove from Playlist'
              >
                <IconTrash />
              </Button>
            </MovieCard>
          ))}
      </Gallery>
    </section>
  );
};
