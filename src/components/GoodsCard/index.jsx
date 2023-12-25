"use client"
import { useRouter } from 'next/navigation'
import clsx from 'clsx';

const GoodsCard = ({ itemDetail = {}, showAddToCardButton = false, styles = {} }) => {
	const router = useRouter();

	return (
		<div className={clsx("p-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-white-500 duration-300 max-w-[50%] sm:max-w-[33.33%] md:max-w-[20%] basis-1/2 sm:basis-1/3 md:basis-1/5", styles?.root)} onClick={() => router.push(`/shop/${itemDetail?.name || 'airpod'}`)}>
			<div className={clsx("pb-1 items-center mb-1 relative flex h-60 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md ", styles?.ctn)}>
				<div className="w-full relative mx-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
					<img
						src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
						className="h-full w-full object-stretch"
					/>
				</div>
				<div className="p-4">
					<div className="mb-2 flex flex-col items-center justify-between">
						<p className="block font-sans text-xs font-normal leading-normal text-gray-700 antialiased opacity-75">
                            Headphone
						</p>
						<p className="block font-sans text-sm font-medium leading-relaxed text-blue-gray-900 antialiased">
                            Apple AirPods
						</p>
						<p className="text-base text-red-500 font-bold block font-sans leading-relaxed text-blue-gray-900 antialiased">
                            45.000 VND
						</p>
					</div>
				</div>
				{
					showAddToCardButton && 
						<div className='px-4 mb-1'>
							<button className='w-fit text-xs rounded-lg border border-red-500 py-1 px-2'>Thêm vào giỏ hàng</button>
						</div>
				}
			</div>
		</div>
	)
}

export default GoodsCard;