import { Route, Routes } from 'react-router-dom';
import './App.css';
//Components
import Home from './components/main/Home';
import MainLayout from './components/shared/MainLayout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
