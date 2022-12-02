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
import SearchByQueryView from './components/views/SearchByQueryView';
import DetailMedia from './components/media/DetailMedia';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="movie" element={<MediaView />} />
          {/* <Route path="movie/:id" element={<DetailMovie />} /> */}
          <Route path="tv" element={<MediaView />} />
          {/* <Route path="tv/:id" element={<DetailTv />} /> */}
          <Route path="search/:search" element={<SearchView />} />
          <Route
            path="search-genre/:mediaType/:genreId"
            element={<SearchByGenreView />}
          />
          <Route path="search-query" element={<SearchByQueryView />} />
          {/* Fixing routes */}
          <Route path="media-type/:type/id/:id" element={<DetailMedia />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
