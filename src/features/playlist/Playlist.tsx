import useMoviesStore from '../../store/movies-store';
import { PlaylistCard } from '../../components/PlaylistCard';

export const Playlist = () => {
  const { movies } = useMoviesStore();

  return (
    <section>
      <h2>Playlist</h2>
      <div className='grid grid-cols-3 gap-8 shadow-xl'>
        {movies &&
          movies.length > 0 &&
          movies.map((movie) => <PlaylistCard key={movie.id} movie={movie} />)}
      </div>
    </section>
  );
};
