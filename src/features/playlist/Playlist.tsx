import useMoviesStore from '../../store/movies-store';
import { PlaylistCard } from '../../components/PlaylistCard';
import {Button} from "../../components/Button";

interface PlaylistProps {
  onSearchClick: () => void;
}

export const Playlist = ({ onSearchClick } : PlaylistProps) => {
  const { movies } = useMoviesStore();

  return (
    <section>
      <h2 className="text-3xl font-bold">Playlist</h2>

        {movies &&
          movies.length > 0 ? (
          <div className='grid lg:grid-cols-2 2xl:grid-cols-3 gap-8 mt-8'>
            {movies.map((movie) => (
              <PlaylistCard key={movie.id} movie={movie} />
            ))}
          </div>)
          : <p className="mt-8"><Button mode="primary" onClick={onSearchClick}>Search</Button> for your favorite movies and add them directly to your playlist for easy access.</p>
        }

    </section>
  );
};
