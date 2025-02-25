import React from 'react';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Toolbar from "./components/Toolbar";
import ProductsCategories from "./pages/ProductsCategories";
import Collections from "./pages/Collections";
import Care from "./pages/Care";
import Contacts from "./pages/Contacts";

const App = () => {
  return (
      <>
          <BrowserRouter>
              <div className='ps-[100px] pe-[100px] backGround min-h-screen'>
                  <Toolbar/>
                  <Routes>
                      <Route path='/' element={<ProductsCategories/>}/>
                      <Route path='/collections' element={<Collections/>}/>
                      <Route path='/care' element={<Care/>}/>
                      <Route path='/contacts' element={<Contacts/>}/>
                  </Routes>
              </div>
          </BrowserRouter>

      </>
  );
};

export default App;
