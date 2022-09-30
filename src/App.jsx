import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
//Components
import Home from './components/main/Home';
import DetailMovie from './components/media/DetailMovie';
import MainLayout from './components/shared/MainLayout';
import SearchView from './components/views/SearchView';
import MediaView from './components/views/MediaView';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<MediaView />} />
          <Route path="movies/:id" element={<DetailMovie />} />
          <Route path="tv" element={<MediaView />} />
          <Route path="tv/:id" element={<h2>one tv</h2>} />
          <Route path="search/:search" element={<SearchView />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
