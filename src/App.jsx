import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
//Components
import Home from './components/main/Home';
import MainLayout from './components/shared/MainLayout';
import SearchView from './components/views/SearchView';
import MediaView from './components/views/MediaView';
import SearchByQueryView from './components/views/SearchByQueryView';
import DetailMedia from './components/media/DetailMedia';
import SeasonView from './components/views/SeasonView';
import SeasonDetail from './components/media/tv/SeasonDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="media-type/:type" element={<MediaView />} />
          <Route path="media-type/:type/id/:id" element={<DetailMedia />} />
          <Route path="tv/:tvId/season/:seasonId" element={<SeasonView />} />
          <Route
            path="tv/:tvId/season/:seasonId/season-detail"
            element={<SeasonDetail />}
          />
          <Route path="search/:search" element={<SearchView />} />
          <Route path="search-query" element={<SearchByQueryView />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
