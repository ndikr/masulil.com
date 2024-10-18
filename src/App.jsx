import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/index';
import Resume from './pages/resume/index';
import Portfolio from './pages/portfolio/index';
import Project from './pages/portfolio/project/index';
import NotFound from './pages/NotFound';
import Download from './pages/resume/download/index';

function ExternalRedirect1() {
  useEffect(() => {
    // Redirect ke URL eksternal
    window.location.href = 'https://collosal.masulil.com/';
  }, []);

  return null; // Tidak menampilkan apa pun di halaman
}

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/resume/download' element={<Download />} />
        <Route path='/layanan' element={<Portfolio />} />
        <Route path='/layanan/:projectId' element={<Project />} />
        <Route path='/layanan/collosal' element={<ExternalRedirect1 />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App