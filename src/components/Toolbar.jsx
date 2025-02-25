import React from 'react';
import {NavLink} from "react-router-dom";
import logo from '../assets/logo.svg';
import globe from '../assets/globe.svg';
import user from '../assets/user.svg';
import emptyBasket from '../assets/emptyBasket.svg';

const Toolbar = () => {
	return (
		<>
			<div className='flex justify-between items-center h-[82px] border'>
				<div className='flex gap-10 items-center'>
					<img src={logo} alt="Logo"/>
					<NavLink to='/'>Produktų kategorijos</NavLink>
					<NavLink to='/collections'>Kolekcijos</NavLink>
					<NavLink to='/care'>Priežiūra</NavLink>
					<NavLink to='/contacts'>Kontaktai</NavLink>
				</div>
				<div className='flex gap-6 items-center'>
					<NavLink to=''>
						<img src={globe} alt="Globe"/>
					</NavLink>
					<NavLink to=''>
						<img src={user} alt="User"/>
					</NavLink>
					<NavLink to=''>
						<img src={emptyBasket} alt="Basket"/>
					</NavLink>
				</div>
			</div>
		</>
	);
};

export default Toolbar;