import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
//Components
import Home from './components/main/Home';
import DetailMovie from './components/media/DetailMovie';
import MainLayout from './components/shared/MainLayout';
import SearchView from './components/views/SearchView';
import MediaView from './components/views/MediaView';
import DetailTv from './components/media/DetailTv';
import SearchByGenreView from './components/views/SearchByGenreView';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="movie" element={<MediaView />} />
          <Route path="movie/:id" element={<DetailMovie />} />
          <Route path="tv" element={<MediaView />} />
          <Route path="tv/:id" element={<DetailTv />} />
          <Route path="search/:search" element={<SearchView />} />
          <Route path="search-genre/" element={<SearchByGenreView />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
