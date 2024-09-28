import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MostPopular from './pages/MostPopular';
import TopAiring from './pages/TopAiring';
import TvSeries from './pages/TvSeries';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className='h-[100vh] bg-primary w-full text-white font-sans'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/mostpopular' element={<MostPopular />} />
          <Route path='/topairing' element={<TopAiring />} />
          <Route path='/tvseries' element={<TvSeries />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App