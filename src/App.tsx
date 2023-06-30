import { useState } from 'react';
import { Search } from './features/search/Search';
import './App.css';
import { Playlist } from './features/playlist/Playlist';
import {NavBar} from "./components/NavBar";

function App() {
  const [isSearching, setIsSearching] = useState(true);

  return (
    <div className='App'>
      <NavBar onSearchClick={() => setIsSearching(true)} onPlaylistClick={() => {setIsSearching(false); console.log('click')}} />
      <div className="container mx-auto px-8 py-16">
        {isSearching ? <Search /> : <Playlist onSearchClick={() => setIsSearching(true)} />}
      </div>
    </div>
  );
}

export default App;
