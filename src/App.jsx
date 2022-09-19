import { Route, Routes } from 'react-router-dom';
import './App.css';
import Hero from './components/main/Hero';
import MainLayout from './components/shared/MainLayout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<MainLayout />}>
          <Route element={<h2>EJEM</h2>} path="/" element={<Hero />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
