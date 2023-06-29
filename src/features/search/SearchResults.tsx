import { NewMovieType } from '../../lib/types';

type SearchResultsProps = {
  items: NewMovieType[];
};

export const SearchResults = ({ items }: SearchResultsProps) => {
  return <pre>{JSON.stringify(items, null, 2)}</pre>;
};
