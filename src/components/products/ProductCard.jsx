import React, {useState, useEffect} from 'react';
import Button from "../Button";
import ButtonBasket from "../icons/ButtonBasket";
import Check from "../icons/Check";
import useMainStore from "../../store/mainStore";

const ProductCard = ({product}) => {

	const {basket, addToBasket, removeFromBasket} = useMainStore()
	const [isAdded, setIsAdded] = useState(false)

	const finalPrice = product.discount > 0 ? (product.price - product.discount).toFixed(2) : product.price.toFixed(2)

	useEffect(() => {
		setIsAdded(basket.some((item) => item.name === product.name))
	}, [basket, product.name])

	const handleAddToBasket = () => {
		addToBasket(product)
		setIsAdded(true)
	}

	return (
		<>
			<div className='item-card'>
				<div className='item-card-image flex items-center justify-center'>
					<img src={product.image} alt={product.name}/>
				</div>
				<div>
					<div className='item-card-description flex flex-col justify-between h-full p-4'>
						<h3>{product.name}</h3>
						<p className='description '>{product.description}</p>
						<p className='price flex items-center gap-2'>{finalPrice} € <span className='oldPrice'>{product.price} €</span></p>
					</div>
					<div className='flex justify-end items-end h-[66px]'>
						<Button
							height='56px'
							width='187px'
							text={isAdded ? 'Krepšelyje' : 'Pridėti į krepšelį'}
							variant='shop'
							iconPosition='left'
							icon={isAdded ? Check : ButtonBasket}
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