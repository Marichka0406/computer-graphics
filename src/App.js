import './App.css';
import HomePage from './pages/HomePage/HomePage';
import FractalsPage from './pages/FractalsPage/FractalsPage';
import ColorModelsPage from './pages/ColorModelsPage/ColorModelsPage';
import MovingImagesPage from './pages/MovingImagesPage/MovingImagesPage';
import StudyMaterialsLessonsPage from './pages/StudyMaterialsPage/StudyMaterialsLessonsPage'
import StudyMaterialsTestsColorsPage from './pages/StudyMaterialsPage/StudyMaterialsTestsColorsPage.jsx'
import StudyMaterialsTestsFractalsPage from './pages/StudyMaterialsPage/StudyMaterialsTestsFractalsPage.jsx';
import StudyMaterialsTestsAffinePage from './pages/StudyMaterialsPage/StudyMaterialsTestsAffinePage.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}/>     
      <Route path="fractals" element={<FractalsPage />} />
      <Route path="color-models" element={<ColorModelsPage />} />
      <Route path="moving-images" element={<MovingImagesPage />} />
      <Route path="study-materials-lessons" element={<StudyMaterialsLessonsPage />} />
      <Route path="study-materials-tests-colors" element={<StudyMaterialsTestsColorsPage />} />
      <Route path="study-materials-tests-fractals" element={<StudyMaterialsTestsFractalsPage />} />
      <Route path="study-materials-tests-affine" element={<StudyMaterialsTestsAffinePage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
