import clsx from "clsx";

const HeaderSider = ({ navClass = '' }) => {
	return <div>
		<nav className={clsx(" bg-gray-600 text-white shadow dark:bg-gray-800", navClass)}>
			<div className="bg-gray-600 container flex items-center justify-center p-2 mx-auto capitalize dark:text-gray-300">
				<a href="#" className="text-sm uppercase border-b-4 border-transparent hover:border-red-400 mx-1.5 sm:mx-6">Giấy cuốn</a>

				<a href="#" className="text-sm uppercase border-b-4 border-transparent hover:border-red-400 mx-1.5 sm:mx-6">Tẩu Thuốc</a>

				<a href="#" className="text-sm uppercase border-b-4 border-transparent hover:border-red-400 mx-1.5 sm:mx-6">Bật lửa</a>

				<a href="#" className="text-sm uppercase border-b-4 border-transparent hover:border-red-400 mx-1.5 sm:mx-6">Hóa hơi</a>
				<div className="header-nav border-transparent border-b-4 flex group mx-1.5 sm:mx-6 hover:border-red-400">
					Phụ Kiện
					<span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="h-6 w-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M19.5 8.25l-7.5 7.5-7.5-7.5"
							/>
						</svg>
					</span>
					<div
						className="mt-7 rounded-lg invisible absolute z-50 flex flex-col border-2 bg-white py-1 px-1 text-gray-800 shadow-xl group-hover:visible w-48"
					>
						<div
							className="text-sm pl-4 py-2 my-2 block border-b border-gray-100 font-semibold text-gray-500 md:mx-1 hover:text-white hover:bg-red-500 hover:rounded-lg"
						>Khay</div>

						<div
							className="text-sm pl-4 py-2 my-2 block border-b border-gray-100 font-semibold text-gray-500 md:mx-1 hover:text-white hover:bg-red-500 hover:rounded-lg"
						>Phụ kiện 420</div>
						<div
							className="text-sm pl-4 py-2 my-2 block border-b border-gray-100 font-semibold text-gray-500 md:mx-1 hover:text-white hover:bg-red-500 hover:rounded-lg"
						>Thời trang
						</div>
					</div>
				</div>

			</div>
		</nav>
	</div>
};
export default HeaderSider;