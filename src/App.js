import './App.css';
import HomePage from './pages/HomePage/HomePage';
import FractalsPage from './pages/FractalsPage/FractalsPage';
import ColorModelsPage from './pages/ColorModelsPage/ColorModelsPage';
import MovingImagesPage from './pages/MovingImagesPage/MovingImagesPage';
import StudyMaterialsPage from './pages/StudyMaterialsPage/StudyMaterialsPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}/>     
      <Route path="fractals" element={<FractalsPage />} />
      <Route path="color-models" element={<ColorModelsPage />} />
      <Route path="moving-images" element={<MovingImagesPage />} />
      <Route path="study-materials" element={<StudyMaterialsPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
