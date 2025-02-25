import React from 'react';
import Navbar from "../components/Navbar";

const ProductsCategories = () => {
	return (
		<>
			<div className=''>
				<div className='flex justify-between items-center h-full'>
					<h1>Produktu kategorijos</h1>
					<Navbar/>
					<button className='btn bg-transparent h-[45px] w-[185px]'>Pridėti produktą +</button>
				</div>
			</div>
		</>
	);
};

export default ProductsCategories;