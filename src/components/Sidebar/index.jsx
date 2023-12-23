"use client"
import { useState } from "react";
import { useEffect } from "react";
import SearchBar from "../SearchBar";

const Sidebar = () => {

	const [isOpen, setOpen] = useState(false);

	const handleOpenMenu = () => {
		setOpen(!isOpen);
	}

	useEffect(() => {
		if (!isOpen) {
			document.querySelector("body").classList.toggle("overflow-hidden")
		} else {
			document.querySelector("body").classList.add("overflow-hidden")
		}
	}, [isOpen]);

	return (
		<nav className="block sm:hidden">
			<button onClick={handleOpenMenu} className="hamburger h-8 p-2 border border-black rounded-full">
				<span className="block w-4 h-0.5 bg-gray-700 mb-1"></span>
				<span className="block w-4 h-0.5 bg-gray-700 mb-1"></span>
				<span className="block w-4 h-0.5 bg-gray-700 mb-1"></span>
			</button>
			<div className={`${isOpen ? 'block' : 'hidden'} overscroll-contain top-0 left-0 z-10 w-full fixed h-full md:block md:w-auto transform  translate-x-0 transition-transform ease-in-out duration-300 flex flex-row`} id="side-menu">
				<ul className="bg-black text-white w-3/5 h-full font-medium flex flex-col p-4 md:p-0  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
					<SearchBar navClass="!block !p-0 !mt-6 !mb-6" inputClass="p" />
					<div className=" text-gray-300 border-b border-t border-zinc-500 py-3" >Giấy cuốn</div>
					<div className=" text-gray-300 border-b border-zinc-500 py-3" aria-current="page">Tẩu thuốc</div>
					<div className=" text-gray-300 border-b border-zinc-500 py-3" aria-current="page">Bật lửa</div>
					<div className=" text-gray-300 border-b border-zinc-500 py-3"aria-current="page">Hóa hơi</div>
				</ul>
				<div onClick={handleOpenMenu} className="w-2/5 h-full bg-red-500  opacity-70">
					<svg className="ml-auto h-8 w-8 text-white"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" /></svg>
				</div>
			</div>
		</nav>
	)
}

export default Sidebar