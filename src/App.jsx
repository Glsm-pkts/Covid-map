import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Detail from './pages/Detail';
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
    <div className='min-h-screen flex flex-col'> 
     <Header/>
<div className='flex-1 bg-zinc-800'> 
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/detail' element={<Detail/>}/>
    </Routes>
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
