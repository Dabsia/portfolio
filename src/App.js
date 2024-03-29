import React from 'react';
import Home from './Pages/Home/Home';
import { Routes, Route } from "react-router-dom";

import NotFound from './Pages/NotFound/NotFound';



const App = () =>  {
  return (
      <Routes>
          <Route path = '/' element = {<Home/>} />
          <Route path = '*' element = {<NotFound/>} />
      </Routes>
  );
} 

export default App;