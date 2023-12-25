"use client"
import React, { useState } from "react";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const RangeSlider = () => {
	const [value, setValue] = useState([10, 100]);

	  const formatValue = (val) => {
		return val.toLocaleString();
	  };

	return (
	  <div className="flex flex-col">
			<span className="mb-4">Lọc theo giá</span>
			<Slider
				range
				value={value}
				allowCross={false}
				onChange={(newValue) => {
					console.log({ newValue })
					setValue(newValue)
				}}
				classNames={{
					handle: "!bg-gray-800 !border-2 !border-white !w-[20px] !h-[20px] shadow-none",
					track: "!bg-gray-400 !h-2"
				}}
				className="!px-2"
				min={10}
			/>
			<div className="flex text-sm mt-5 justify-between items-center">
				<button className="bg-gray-600 rounded-2xl px-5 py-0.5 text-white">Lọc</button>
				<div className="flex">
					<span>Giá: </span><br/>
					<div className="text-gray-700 font-semibold">{formatValue(value[0] * 10000)}đ    </div>
				-
					<div className="text-gray-700 font-semibold">    {formatValue(value[1] * 10000)}đ</div>
				</div>
			</div>
	  </div>
	);
};
  

export default RangeSlider;

