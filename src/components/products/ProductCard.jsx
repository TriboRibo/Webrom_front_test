import React, {useState} from 'react';
import Button from "../Button";
import ButtonBasket from "../icons/ButtonBasket";

const ProductCard = ({ product, addToBasket }) => {

	const [isAdded, setIsAdded] = useState(false)

	const finalPrice = product.discount > 0 ? (product.price - product.discount).toFixed(2) : product.price.toFixed(2)

	const handleAddToBasket = () => {
		setIsAdded(true)
	}

	return (
		<>
			<div className='item-card'>
				<div className='item-card-image flex items-center justify-center'>
					<img src={product.image} alt={product.name}/>
				</div>
				<div>
					<div className='item-card-description'>
						<div>{product.name}</div>
						<div>{product.description}</div>
						<div>{finalPrice}</div>
					</div>
					<div className='flex justify-end items-end h-[66px]'>
						<Button
							height='56px'
							width='187px'
							text={isAdded ? 'Pridėta' : 'Pridėti į krepšelį'}
							variant='shop'
							iconPosition='left'
							icon={ButtonBasket}
							onClick={!isAdded ? handleAddToBasket : undefined}
							disabled={isAdded}
						/>
					</div>
				</div>
			</div>
			
		</>
	);
};

export default ProductCard;