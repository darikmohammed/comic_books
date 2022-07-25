import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './routes/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <h1>React App</h1>
    </div>
  );
}

export default App;
