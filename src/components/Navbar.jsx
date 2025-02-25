import React from 'react';
import {useLocation, NavLink} from 'react-router-dom';
import Home from './icons/Home'
import arrow from '../assets/arrow.svg'

const Navbar = () => {

	const location = useLocation();
	const currentRoute = location.pathname

	const routeNames = {
		'/products': 'Produktų kategorijos',
		'/collections': 'Kolekcijos',
		'/care': 'Priežiūra',
		'/contacts': 'Kontaktai',
	};
	// Split the current route into parts
	const pathParts = currentRoute.split('/').filter(part => part);
	const breadcrumbs = [];
	// Add Home as the first breadcrumb
	breadcrumbs.push(
		<NavLink key="home" to="/">
			<Home />
		</NavLink>
	);

	let currentPath = ''
	let lastRoutePath = ''

	pathParts.forEach((part, index) => {
		currentPath += `/${part}`;
		const isLast = index === pathParts.length - 1;
		const routeLabel = routeNames[currentPath] || decodeURIComponent(part);

		if (isLast) lastRoutePath = routeLabel
		// Add an arrow before each breadcrumb (except the first one)
		breadcrumbs.push(
			<img key={`arrow-${index}`} src={arrow} alt="arrow" />
		);

		// If it's NOT the last item, make it a clickable link
		if (!isLast) {
			breadcrumbs.push(
				<NavLink key={`crumb-${index}`} to={currentPath}>
					{routeLabel}
				</NavLink>
			);
		} else {
			// Last item is just text
			breadcrumbs.push(
				<span key={`crumb-${index}`}>
                    {routeLabel}
                </span>
			);
		}
	});

	return (
		<div className="h-[159px] border flex justify-between w-full">
			<div>
				<h1>{lastRoutePath}</h1>
			</div>
			<div className='flex items-center gap-2'>
				{breadcrumbs}
			</div>
			<button className='btn bg-transparent h-[45px] w-[185px]'>Pridėti produktą +</button>
		</div>
	);
};

export default Navbar;