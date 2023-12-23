import GoodsList from "@/components/GoodsList";
import SearchBar from "@/components/SearchBar";

const DownIcon = () => {
	return (
		<svg className="h-4 w-5 text-black-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
		</svg>
	)
}

const Shop = () => {
	return (
		<div className="flex">
			<div className="w-[30%] p-6 pr-0 sm:block hidden">
				<span className="text-lg text-gray-500 font-semibold">Tìm kiếm sản phẩm</span>
				<span className="block max-w-[30px] my-4 mx-0 w-full h-[3px] bg-gray-200" />
				<SearchBar navClass="!px-0"/>
				<br />
				<span className="text-lg text-gray-500 font-semibold">Danh mục sản phẩm</span>
				<span className="block max-w-[30px] my-4 mx-0 w-full h-[3px] bg-gray-200" />
				<ul id="sid-category w-full">
					<li className="flex justify-between border-b-2 mb-4 pb-2">
						<span>Giấy cuốn</span>
					</li>
					<li className="flex justify-between border-b-2 mb-4 pb-2">
						<span>Bật lửa</span>
					</li>
					<li className="flex justify-between border-b-2 mb-4 pb-2">
						<span>Tẩu thuốc</span>
					</li>
				</ul>
			</div>
			<div className="w-full sm:max-w-[70%] pt-8 pl-2">
				<GoodsList goods={[1,2,3,4,5,6,7,8,9]} showAddToCardButton={true} />
			</div>
		</div>
	)
}

export default Shop;