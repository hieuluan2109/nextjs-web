"use client"
import { useRouter } from 'next/navigation'
import CartIcon from "../CartIcon";
import NavBar from "../NavBar";
import SearchBar from "../SearchBar";
import Sidebar from '../Sidebar';
import Image from 'next/image';

const Header = () => {
	const router = useRouter();

	return (
		<div>
			<div className="bg-gray-400 w-full flex p-6 justify-between items-center">
				<Sidebar />
				<button onClick={() => router.push('/')}>
					<Image width={80} height={64} className="rounded-full w-full h-full" src="/logo.jpg" alt="Hao"/>
				</button>
				<SearchBar />
				<button className='sm:w-auto w-[34px] transition-smoth flex items-center hover:font-medium' onClick={() => router.push('/cart')}>
					<span className="sm:block text-nowrap hidden mr-2">Giỏ hàng</span>
					<CartIcon />
				</button>
			</div>
			<NavBar navClass='sm:flex hidden' />
		</div>
	)
}

export default Header;