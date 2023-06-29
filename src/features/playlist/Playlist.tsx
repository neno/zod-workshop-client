import useMoviesStore from '../../store/movies-store';
import {PlaylistCard} from "../../components/PlaylistCard";

export const Playlist = () => {
  const { movies } = useMoviesStore();

  return (
    <section>
      <h2>Playlist</h2>
      <div className='grid grid-cols-4 gap-8 bg-gray-300 shadow-xl'>
        {movies &&
          movies.length > 0 &&
          movies.map((movie) => (
            <PlaylistCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
            />
          ))}
      </div>
    </section>
  );
};
