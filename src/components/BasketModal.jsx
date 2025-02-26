import React from 'react';
import useMainStore from "../store/mainStore";
import Bin from "./icons/Bin";
import Button from "./Button";
import Arrow from './icons/Arrow'

const BasketModal = ({isVisible}) => {

	const {basket, removeFromBasket} = useMainStore()

	if (!isVisible || basket.length === 0) return null

	return (
		<>
			<div className='w-[340px] absolute right-[-50px] z-10 bg-[#FFFFFF] rounded-[6px] border border-[#1F74B7]'>
				<div className='max-h-[500px] overflow-y-auto'>
					{basket.map((item, index) => (
						<div className='flex flex-col justify-center'>
							<div className='flex justify-around items-center h-[80px] pt-2 pb-2' key={index}>
								<img className='h-full' src={item.image} alt={item.name}/>
								<div className='flex flex-col'>
									<span>{item.name}</span>
									<span>{item.price} €</span>
								</div>
								<button onClick={() => removeFromBasket(index)}>
									<Bin/>
								</button>
							</div>
							<div className='flex justify-center p-[16px]'>
								<Button
									height='40px'
									width='308px'
									text='Apmokėti'
									variant='buyProduct'
									iconPosition={'right'}
									icon={Arrow}
								/>
							</div>
						</div>
					))}
				</div>
			</div>

		</>
	);
};

export default BasketModal;