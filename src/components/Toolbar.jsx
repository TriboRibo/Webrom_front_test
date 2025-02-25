import React from 'react';
import {NavLink} from "react-router-dom";
import logo from '../assets/logo.svg';
import GlobeIcon from "./icons/GlobeIcon";
import UserIcon from "./icons/UserIcon";
import Basket from "./icons/Basket";

const Toolbar = () => {
	return (
		<>
			<div className='flex justify-between items-center h-[82px] border toolbar'>
				<div className='flex gap-8 items-center'>
					<img src={logo} alt="Logo"/>
					<NavLink to='/products'>Produktų kategorijos</NavLink>
					<NavLink to='/collections'>Kolekcijos</NavLink>
					<NavLink to='/care'>Priežiūra</NavLink>
					<NavLink to='/contacts'>Kontaktai</NavLink>
				</div>
				<div className='flex gap-0.5 items-center'>
					<NavLink to='/'>
						<GlobeIcon/>

					</NavLink>
					<NavLink to='/'>
						<UserIcon/>
					</NavLink>
					<NavLink to='/'>
						<Basket/>
					</NavLink>
				</div>
			</div>
		</>
	);
};

export default Toolbar;