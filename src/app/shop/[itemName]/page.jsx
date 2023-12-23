import ShowcaseGoods from '@components/ShowcaseGoods'

const ItemDetail = () => {
	return (
		<div>
			<section className="py-10 font-poppins dark:bg-gray-800">
				<div className="max-w-6xl px-4 mx-auto">
					<div className="flex flex-wrap mb-24 -mx-4">
						<div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
							<div className="sticky top-0 overflow-hidden ">
								<div className="relative mb-6 lg:mb-10 lg:h-96">
									<a className="absolute left-0 transform lg:ml-2 top-1/2 translate-1/2" href="#">
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-5 h-5 text-blue-500 bi bi-chevron-left dark:text-blue-200" viewBox="0 0 16 16">
											<path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z">
											</path>
										</svg>
									</a>
									<img className="object-contain w-full lg:h-full" src="https://i.postimg.cc/0jwyVgqz/Microprocessor1-removebg-preview.png" alt="" />
									<a className="absolute right-0 transform lg:mr-2 top-1/2 translate-1/2" href="#">
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-5 h-5 text-blue-500 bi bi-chevron-right dark:text-blue-200" viewBox="0 0 16 16">
											<path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
											</path>
										</svg>
									</a>
								</div>
								<div className="flex-wrap hidden -mx-2 md:flex">
									<div className="w-1/2 p-2 sm:w-1/4">
										<a className="block border border-gray-200 hover:border-blue-400 dark:border-gray-700 dark:hover:border-blue-300" href="#">
											<img className="object-contain w-full lg:h-28" src="https://i.postimg.cc/Z5KhRkD6/download-1-removebg-preview.png" alt=""/>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="w-full px-4 md:w-1/2">
							<div className="lg:pl-20">
								<div className="mb-6 ">
									<h2 className="max-w-xl mt-6 mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300">
                                    Intel® Core™ i5-12600HX Processor (18M Cache, up to 4.60 GHz)
									</h2>
									<div className="flex flex-wrap items-center mb-6">
										<ul className="flex mb-4 mr-2 lg:mb-0">
											<li>
												<a href="#">
													<svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
														<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
													</svg>
												</a>
											</li>
											<li>
												<a href="#">
													<svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
														<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
													</svg>
												</a>
											</li>
											<li>
												<a href="#">
													<svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
														<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
													</svg>
												</a>
											</li>
											<li>
												<a href="#">
													<svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
														<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
													</svg>
												</a>
											</li>
											<li>
												<a href="#">
													<svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
														<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
													</svg>
												</a>
											</li>
										</ul>
									</div>
									<p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
										<span>7,000,000 VNĐ</span>
										<span className="ml-3 text-base font-normal text-gray-500 line-through dark:text-gray-400">10,000,000 VNĐ</span>
									</p>
								</div>
								<div className="mb-6 "></div>
								<div className="flex flex-wrap items-center mb-6">
									<div className="mb-4 mr-4 lg:mb-0">
										<div className="w-28">
											<div className="relative flex flex-row w-full h-10 bg-transparent rounded-lg">
												<button className="w-20 h-full text-gray-600 bg-gray-100 border-r rounded-l outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-300">
													<span className="m-auto text-2xl font-thin">-</span>
												</button>
												<input type="number" className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-100 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black" placeholder="1" />
												<button className="w-20 h-full text-gray-600 bg-gray-100 border-l rounded-r outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-300">
													<span className="m-auto text-2xl font-thin">+</span>
												</button>
											</div>
										</div>
									</div>
									<a href="#" className="w-full px-4 py-3 text-center text-blue-600 bg-blue-100 border border-blue-600 dark:hover:bg-gray-900 dark:text-gray-400 dark:border-gray-700 dark:bg-gray-700 hover:bg-blue-600 hover:text-gray-100 lg:w-1/2 rounded-xl">
                                    Thêm vào giỏ hàng
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="py-10 font-poppins dark:bg-gray-800 px-8">
				<div className="flex border-t-2 pt-4 flex-col">
					<span className="text-2xl mb-6 font-semibold" >Mô tả sản phẩm</span>
					<span className="text-gray-600">
					Hãy tận hưởng những Giấy cuộn Blazy Susan x Grateful Dead này, được sản xuất tại Pháp với chất liệu cao cấp và giấy siêu mỏng chất lượng. Những loại giấy làm từ thực phẩm thuần chay được cấp phép chính thức này mang lại khả năng đốt cháy chậm mà không có dư vị như giấy.
					</span>
				</div>
			</section>
			<section>
				<ShowcaseGoods title="Sản phẩm tương tự" showAddToCardButton={true} />
			</section>
		</div>
	)
}

export default ItemDetail;