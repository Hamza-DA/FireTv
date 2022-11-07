import React from 'react';
import NavBar from './Components/NavBar';
import Post from './Pages/Post';
import { Routes, Route, Navigate } from 'react-router-dom';
import { redirect } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Searchres from './Pages/Searchres';
import Home from './Pages/Home';
import Pageh from './Pages/Pageh';
function App() {
  const location = useLocation().pathname;
  console.log(location);
  return (
    <div className='bg-black'>
      <NavBar />
      <Routes>
        {/* <Redirect from='/' to='/movie' /> */}
        <Route path='' element={<Navigate to='/movie' replace />} />
        <Route path='/:type' exact element={<Pageh />} />
        <Route path='/:type/:id' element={<Post />} />
        <Route path='/search' element={<Searchres />} />
      </Routes>
    </div>
  );
}

export default App;
