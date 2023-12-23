"use client"
import { useRouter } from 'next/navigation'
import CartIcon from "../CartIcon";
import NavBar from "../NavBar";
import SearchBar from "../SearchBar";
import Sidebar from '../Sidebar';

const Header = () => {
	const router = useRouter();

	return (
		<div>
			<div className="w-full flex p-6 justify-between items-center">
				<Sidebar />
				<div onClick={() => router.push('/')}>
					<img className="w-24 h-20 sm:w-20 sm:h-16" src="https://geekstoresvn.com/wp-content/uploads/2022/05/logo-moi.png" alt="Hao" />
				</div>
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