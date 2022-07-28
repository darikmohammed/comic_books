import { Routes, Route } from 'react-router-dom';

import './App.css';
import TvShows from './Components/TvShows';
import Home from './routes/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tvshows/:id" element={<TvShows />} />
      </Routes>
    </div>
  );
}

export default App;
