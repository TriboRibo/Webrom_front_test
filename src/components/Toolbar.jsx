import React, {useState, useEffect, useRef} from 'react';
import {NavLink} from "react-router-dom";
import logo from '../assets/logo.svg';
import GlobeIcon from "./icons/GlobeIcon";
import UserIcon from "./icons/UserIcon";
import Basket from "./icons/Basket";
import useMainStore from "../store/mainStore";
import BasketModal from "./BasketModal";

const Toolbar = () => {

	const {basket} = useMainStore();
	const [showModal, setShowModal] = useState(false)
	const [showTooltip, setShowTooltip] = useState(false);
	const modalRef = useRef(null);

	// Close modal when clicking outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (modalRef.current && !modalRef.current.contains(event.target)) {
				setShowModal(false);
			}
		};
		if (showModal) {
			document.addEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [showModal]);

	return (
		<>
			<div className='flex justify-between items-center h-[82px] toolbar'>
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
					<div
						className="relative w-[42px] h-[42px]"
						ref={modalRef}
						onMouseEnter={() => !basket.length && setShowTooltip(true)}
						onMouseLeave={() => setShowTooltip(false)}
					>
						<div onClick={() => setShowModal(!showModal)}>
							<Basket/>
							{basket.length > 0 ? (
								<span className="absolute top-0 right-0 bg-[#1F74B7] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">{basket.length}</span>
							) : (
								showTooltip && (
									<div className='absolute right-0 tooltip z-10'>Jūsų pirkinių krepšelis yra tuščias</div>
								)
							)}
						</div>
						<div className='absolute'>
							<BasketModal isVisible={showModal} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Toolbar;