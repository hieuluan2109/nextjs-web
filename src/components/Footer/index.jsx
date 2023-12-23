const Footer = () => {
	return (
		<footer className="relative bg-blueGray-200 pt-8 pb-6">
			<hr className="my-6 border-blueGray-300" />
			<div className="container mx-auto px-4">
				<div className="flex flex-wrap text-left lg:text-left">
					<div className="w-full lg:w-6/12 px-4">
						<h4 className="text-3xl fonat-semibold text-blueGray-700">
                            Thông tin liên hệ
						</h4>
						<h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                            Liên hệ với chúng tôi tại
						</h5>
						<div className="mt-6 lg:mb-0 mb-6">
							<button className="bg-blue-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
								<svg className="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
							</button>
						</div>
					</div>
					<div className="w-full lg:w-6/12 px-4">
						<div className="flex flex-wrap items-top mb-6">
							<div className="w-full lg:w-4/12 px-4 ml-auto">
								<span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Hỗ trợ</span>
								<ul className="list-unstyled">
									<li>
										<a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/presentation?ref=njs-profile">Fanpage <span>Cần Store</span></a>
									</li>
									<li>
										<a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Zalo</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<hr className="my-6 border-blueGray-300" />
				<div className="flex flex-wrap items-center md:justify-between justify-center">
					<div className="w-full md:w-4/12 px-4 mx-auto text-center">
						<div className="text-sm text-blueGray-500 font-semibold py-1">
          Copyright © <span id="get-current-year">2023</span><a href="#" className="text-blueGray-500 hover:text-gray-800" target="_blank"> Notus JS by</a>
							<a href="#" className="text-blueGray-500 hover:text-blueGray-800"> Hào</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer;