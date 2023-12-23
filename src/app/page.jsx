"use client"
import ShowcaseGoods from "@/components/ShowcaseGoods"
import { useRouter } from 'next/navigation'

const Home = () => {
	const router = useRouter();

	return (
		<div className="flex flex-col items-center ">
			<ShowcaseGoods title="Sản phẩm mới" />
			<ShowcaseGoods title="Hàng bán chạy" />
			<ShowcaseGoods title="Có thể bạn sẽ thích" />
			<div>
				<button
					className="middle none center rounded-lg bg-red-600 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-600/20 transition-all hover:shadow-lg hover:shadow-blue-600/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none flex justify-center items-center w-full px-16 py-4"
					data-ripple-light="true"
					onClick={() => router.push('/shop')}
				>
					<span>Xem tất cả sản phẩm</span>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="file: w-6 ml-2">
						<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
					</svg>
				</button>
			</div>
			<div className="sm:flex-row flex-col flex justify-between w-full px-8 sm:px-16 mt-16">
				<div className="w-full flex flex-col items-center justify-center py-4 px-4 sm:w-1/3">
					<svg className="h-8 w-8 text-red-500"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="7" cy="17" r="2" />  <circle cx="17" cy="17" r="2" />  <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />  <line x1="3" y1="9" x2="7" y2="9" /></svg>					
					<span className="text-lg">Giao hành nhanh</span>
					<span className="font-semibold text-gray-500 text-sm">Giao nhanh trên toàn quốc</span>
				</div>				
				<div className="w-full sm:w-1/3 sm:border-x-2 sm:border-y-0 border-y-2 flex flex-col items-center justify-center py-4 px-4">
					<svg className="h-8 w-8 text-red-500"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6-6a6 6 0 0 1 -8 -8l3.5 3.5" /></svg>
					<span className="text-lg">Bảo hành</span>
					<span className="font-semibold text-gray-500 text-sm">Chế độ bảo hành tốt nhất. An tâm sử dụng</span>
				</div>
				<div className="w-full sm:w-1/3 flex flex-col items-center justify-center py-4 px-4">
					<svg className="h-8 w-8 text-red-500"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="13" rx="2" width="4" height="6" />  <rect x="16" y="13" rx="2" width="4" height="6" />  <path d="M4 15v-3a8 8 0 0 1 16 0v3" />  <path d="M18 19a6 3 0 0 1 -6 3" /></svg>					
					<span className="text-lg">Tư vấn</span>
					<span className="font-semibold text-gray-500 text-sm">Hỗ trợ 24/7</span>
				</div>
			</div>
		</div>
	)
}

export default Home