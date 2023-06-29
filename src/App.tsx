import { useState } from 'react';
import { Search } from './features/search/Search';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <Search />
    </div>
  );
}

export default App;
