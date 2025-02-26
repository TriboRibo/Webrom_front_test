import React from 'react';
import {useNavigate} from "react-router-dom";

const ProductsCategories = () => {

	const nav = useNavigate()

	//hardcoded labels
	const categoryLabels = {
		Plants: 'Sodo augalai',
		Tools: 'Įrankiai',
		Accessories: 'Priedai',
	}

	// const categories = ['Plants', 'Accessories', 'Tools']
	const categories = Object.keys(categoryLabels)

	const categoryClick = (category) => {
		nav(`/products/${category}`);
	}

	return (
		<>
			<div className=''>
				<div>
					{categories.map((category, index) => (
						<li
							key={index}
							onClick={() => categoryClick(category)}
							className="category-item cursor-pointer p-2 hover:opacity-70 transition duration-200"
						>
							{categoryLabels[category]}
						</li>
					))}
				</div>
			</div>
		</>
	);
};

export default ProductsCategories;