import { useState } from 'react';
import useSWR from 'swr';
import { SearchForm } from './SearchForm';
import { SearchResults } from './SearchResults';
import { toast } from 'react-toastify';
import { Stack } from '../../components/Stack';
import { searchMovies } from '../../lib/api';

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const {
    isLoading,
    data: items,
    error,
  } = useSWR(!!searchTerm && searchTerm, searchMovies, {
    shouldRetryOnError: false,
  });

  // if (error) {
  //   toast.error('Something went wrong');
  // }

  return (
    <section>
      <h2>Search Movies</h2>
      <p>Search movies and add them to your playlist</p>

      <Stack>
        <SearchForm onSubmit={setSearchTerm} isLoading={isLoading} />
        {!!items && items.length > 0 && <SearchResults items={items} />}
      </Stack>
    </section>
  );
};
