import React from 'react';
import {useNavigate} from "react-router-dom";

const ProductsCategories = () => {

	const nav = useNavigate()

	const categories = ['Plants', 'Accessories', 'Tools']

	const categoryClick = (category) => {
		nav(`/products/${category}`);
	}

	return (
		<>
			<div className=''>
				<div>
					{categories.map((category, index) => (
						<div
							key={index}
							onClick={() => categoryClick(category)}
							className="category-item"
						>
							{category}
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default ProductsCategories;