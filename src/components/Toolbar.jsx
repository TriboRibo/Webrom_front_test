import React, {useState, useEffect, useRef} from 'react';
import {NavLink} from "react-router-dom";
import logo from '../assets/logo.svg';
import GlobeIcon from "./icons/GlobeIcon";
import UserIcon from "./icons/UserIcon";
import Basket from "./icons/Basket";
import useMainStore from "../store/mainStore";
import BasketModal from "./BasketModal";
import Bar from './icons/Bar'

const Toolbar = () => {

	const {basket} = useMainStore();
	const [showModal, setShowModal] = useState(false)
	const [showTooltip, setShowTooltip] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
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
				<div className='gap-8 items-center hidden lg:flex'>
					<img src={logo} alt="Logo"/>
					<NavLink to='/products'>Produktų kategorijos</NavLink>
					<NavLink to='/collections'>Kolekcijos</NavLink>
					<NavLink to='/care'>Priežiūra</NavLink>
					<NavLink to='/contacts'>Kontaktai</NavLink>
				</div>
				{/* Mobile Bar Button (Visible Only on Small Screens) */}
				<div className="lg:hidden flex items-center">
					<div onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl cursor-pointer">
						{isMenuOpen ? <Bar/> : <Bar/>}
					</div>
				</div>
				{/* Logo (Visible Only on Small Screens, Centered) */}
				<div className="lg:hidden flex justify-center">
					<img src={logo} alt="Logo" />
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
			{/* Mobile Dropdown Bar */}
			{isMenuOpen && (
				<div className="lg:hidden bg-[#FFFFFF] shadow-md absolute w-[160px] left-10 top-[82px] flex flex-col items-center gap-2 py-4 p-2 rounded-btn z-10">
					<NavLink to='/products' className="py-2 btn bg-transparent hover:bg-transparent w-full" onClick={() => setIsMenuOpen(false)}>Produktų kategorijos</NavLink>
					<NavLink to='/collections' className="py-2 btn bg-transparent hover:bg-transparent w-full" onClick={() => setIsMenuOpen(false)}>Kolekcijos</NavLink>
					<NavLink to='/care' className="py-2 btn bg-transparent hover:bg-transparent w-full" onClick={() => setIsMenuOpen(false)}>Priežiūra</NavLink>
					<NavLink to='/contacts' className="py-2 btn bg-transparent hover:bg-transparent w-full" onClick={() => setIsMenuOpen(false)}>Kontaktai</NavLink>
				</div>
			)}
		</>
	);
};

export default Toolbar;