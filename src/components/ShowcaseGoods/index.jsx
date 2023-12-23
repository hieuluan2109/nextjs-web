import GoodsList from "../GoodsList";

const ShowcaseGoods = ({ title, showAddToCardButton }) => {
	return (
		<div className="flex flex-wrap -mx-3 mb-3 w-full">
			<div className="w-full max-w-full px-3 mb-6  mx-auto">
				<div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] border border-dashed border-stone-200 bg-white m-5">
					<div className="flex-auto block py-8 px-9">
						<div>
							<div className="mb-9">
								<div className="flex items-center">
									<div className="flex-1 border-t-2 border-gray-300"></div>
									<h1 className=" mx-4 mb-2 text-center text-[1.75rem] font-semibold text-red-500">{title}</h1>
									<div className="flex-1 border-t-2 border-gray-300"></div>
								</div>
							</div>
							<GoodsList showAddToCardButton={showAddToCardButton} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ShowcaseGoods;