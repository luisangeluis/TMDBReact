import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
//Components
import Home from './components/main/Home';
import MainLayout from './components/shared/MainLayout';
import SearchView from './components/views/SearchView';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<h2> movies</h2>} />
          <Route path="movies/:id" element={<h2>one movie</h2>} />
          <Route path="tv" element={<h2>tv</h2>} />
          <Route path="tv/:id" element={<h2>tv</h2>} />
          <Route path="search/:search" element={<SearchView />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
