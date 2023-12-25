import GoodsList from "@/components/GoodsList";
import RangeSlider from "@/components/RangeSlider";
import SearchBar from "@/components/SearchBar";

const Shop = () => {
	return (
		<div className="flex">
			<div className="w-[30%] p-6 sm:block hidden pr-5">
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
				<RangeSlider />
			</div>
			<div className="w-full sm:max-w-[70%] pt-8 pl-2">
				<GoodsList goods={[1,2,3,4,5,6,7,8,9]} showAddToCardButton={true} />
			</div>
		</div>
	)
}

export default Shop;