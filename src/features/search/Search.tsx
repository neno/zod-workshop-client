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

  return (
    <section>
      <h2 className='text-3xl font-bold'>Search Movies</h2>
      <Stack className='mt-8'>
        <SearchForm onSubmit={setSearchTerm} isLoading={isLoading} />
        {isLoading ? (
          <span className='loading loading-spinner loading-lg'></span>
        ) : !!items && items.length > 0 ? (
          <SearchResults items={items} />
        ) : searchTerm ? (
          <p>
            Sorry, no movies were found matching your search term '
            <span className='text-primary'>{searchTerm}</span>'.
          </p>
        ) : (
          <p>Search movies and add them to your playlist</p>
        )}
      </Stack>
    </section>
  );
};
