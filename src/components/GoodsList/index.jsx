import GoodsCard from "../GoodsCard";

const mockGoods = [1,2,3,4,5]

const GoodsList = ({goods = mockGoods, showAddToCardButton = false}) => {
	return (							
		<div className="flex flex-wrap w-full">
			{
				goods.map((item, key) => {
					return <GoodsCard key={key} showAddToCardButton={showAddToCardButton} />
				})
			}
		</div>
	)
}

export default GoodsList;