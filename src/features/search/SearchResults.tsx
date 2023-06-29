import { Button } from '../../components/Button';
import { Gallery } from '../../components/Gallery';
import { MovieCard } from '../../components/MovieCard';
import { IconPlus } from '../../components/icons';
import { NewMovieType } from '../../lib/types';
import useMoviesStore from '../../store/movies-store';

type SearchResultsProps = {
  items: NewMovieType[];
};

export const SearchResults = ({ items }: SearchResultsProps) => {
  const { addMovie } = useMoviesStore();

  return (
    <Gallery>
      {items &&
        items.length > 0 &&
        items.map((movie) => (
          <MovieCard key={JSON.stringify(movie)} movie={movie}>
            <Button onClick={() => addMovie(movie)} title='Add to Playlist'>
              <IconPlus />
            </Button>
          </MovieCard>
        ))}
    </Gallery>
  );
};
