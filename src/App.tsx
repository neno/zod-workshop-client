import { useState } from 'react';
import { Search } from './features/search/Search';
import './App.css';
import { Playlist } from './features/playlist/Playlist';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <Search />
      <Playlist />
    </div>
  );
}

export default App;
