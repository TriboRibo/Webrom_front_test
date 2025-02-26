import React from 'react';
import {useLocation, NavLink, useNavigate} from 'react-router-dom';
import Home from './icons/Home'
import arrow from '../assets/arrow.svg'
import Button from "./Button";
import Plus from "./icons/Plus";

const Navbar = () => {

	const location = useLocation();
	const currentRoute = location.pathname
	const nav = useNavigate()

	// Map category names for display
	const routeNames = {
		'/products': 'Produktų kategorijos',
		'/collections': 'Kolekcijos',
		'/care': 'Priežiūra',
		'/contacts': 'Kontaktai',
		'/addproduct': 'Pridėti produktą'
	};
	const categoryLabels = {
		Plants: 'Sodo augalai',
		Accessories: 'Įrankiai',
		Tools: 'Priedai'
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
		const routeLabel = routeNames[currentPath] || categoryLabels[part] || decodeURIComponent(part);

		if (isLast) lastRoutePath = routeLabel
		// Override the last route label if it's "/addproduct"
		if (currentPath === "/addproduct") {
			lastRoutePath = "Naujas produktas"; // Change lastRoutePath to "Naujas produktas"
		} else if (isLast) {
			lastRoutePath = routeLabel;
		}
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
		<div className="h-[159px] w-full flex flex-col justify-evenly">
			<div className='flex items-center gap-3 navBar'>
				{breadcrumbs}
			</div>
			<div className='flex justify-between items-center'>
				<h1>{lastRoutePath}</h1>
				{currentRoute !== '/addproduct' && (
					<Button
						height='45px'
						width='185px'
						text='Pridėti produktą'
						variant='addProduct'
						iconPosition={'right'}
						icon={Plus}
						onClick={() => nav('/addproduct')}
					/>
				)}
			</div>
		</div>
	);
};

export default Navbar;