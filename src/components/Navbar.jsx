import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import Home from './icons/Home'
import arrow from '../assets/arrow.svg'

const Navbar = () => {

	const location = useLocation();
	const currentRoute = location.pathname

	let routeName = ''

	if (currentRoute.includes('/products')) {
		routeName = 'Produktų kategorijos'
	} else if (currentRoute === '/collections') {
		routeName = 'Kolekcijos'
	} else if (currentRoute === '/care') {
		routeName = 'Priežiūra'
	} else if (currentRoute === '/contacts') {
		routeName = 'Kontaktai'
	}

	return (
		<>
			<div className='h-[159px] border'>
				<NavLink className='flex items-center gap-2' to='/'>
					<Home/>
					<img src={arrow} alt=""/>
					{routeName}
				</NavLink>
			</div>
		</>
	);
};

export default Navbar;