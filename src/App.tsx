import { useState } from 'react';
import { Search } from './features/search/Search';
import { Playlist } from './features/playlist/Playlist';
import { IconSearch, IconStack } from './components/icons';
import { Stack } from './components/Stack';
import { clsxm } from './lib/helpers';
import './App.css';

function App() {
  const [isSearching, setIsSearching] = useState(true);

  return (
    <div className='App'>
      <div className='container mx-auto'>
        <Stack className='min-h-[100vh] justify-between'>
          <div className='flex-none tabs tabs-boxed flex items-center justify-between p-4 mt-8'>
            <header className='flex gap-2'>
              <button
                type='button'
                className={clsxm('btn btn-ghost ', {
                  'btn-active': isSearching,
                })}
                onClick={() => setIsSearching(true)}
              >
                <IconSearch />
                Search
              </button>
              <button
                type='button'
                className={clsxm('btn btn-ghost ', {
                  'btn-active': !isSearching,
                })}
                onClick={() => setIsSearching(false)}
              >
                <IconStack />
                Playlist
              </button>
            </header>
          </div>
          <main className='flex-auto'>
            {isSearching ? (
              <Search />
            ) : (
              <Playlist onSearchClick={() => setIsSearching(true)} />
            )}
          </main>
          <footer className='flex-none tabs tabs-boxed p-4 mb-8'>
            <p className='flex items-center gap-2'>
              <strong>©TheTeam</strong> -{' '}
              <small>This is the showcase App for Zod Workshop</small>
            </p>
          </footer>
        </Stack>
      </div>
    </div>
  );
}

export default App;
