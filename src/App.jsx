import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Toolbar from "./components/Toolbar.jsx";
import ProductsCategories from "./pages/ProductsCategories";
import Collections from "./pages/Collections";
import Care from "./pages/Care";
import Contacts from "./pages/Contacts";
import ProductList from "./pages/ProductList";
import AddNewProduct from "./pages/AddNewProduct";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";

const App = () => {

	return (
		<>
			<BrowserRouter>
				<div className='ps-[100px] pe-[100px] backGround min-h-screen w-full'>
					<Toolbar/>
					<Routes>
						<Route element={<MainLayout/>}>
							<Route path='/' element={<Home/>}/>
							<Route path='/products' element={<ProductsCategories/>}/>
							<Route path='/products/:category' element={<ProductList/>}/>
							<Route path='/collections' element={<Collections/>}/>
							<Route path='/care' element={<Care/>}/>
							<Route path='/contacts' element={<Contacts/>}/>
							<Route path='/addproduct' element={<AddNewProduct/>}/>
						</Route>
					</Routes>
				</div>
			</BrowserRouter>
		</>
	);
};

export default App;
