import React from 'react';
import { IComics } from 'interfaces';

const mockup: IComics[] = [
	{
		title: "Giant-Size X-Men: Tribute To Wein & Cockrum #1",
		price: "5.99 €",
		img: "https://cdn.marvel.com/u/prod/marvel/i/mg/7/00/67915677ecea1/portrait_uncanny.jpg",
	},
	{
		title: "Avengers #36",
		price: "3.99 €",
		img: "https://cdn.marvel.com/u/prod/marvel/i/mg/7/00/67915677ecea1/portrait_uncanny.jpg",
	},
	{
		title: "Shang-Chi #1",
		price: "3.99 €",
		img: "https://cdn.marvel.com/u/prod/marvel/i/mg/7/00/67915677ecea1/portrait_uncanny.jpg",
	},
	{
		title: "Avengers #36",
		price: "3.99 €",
		img: "https://cdn.marvel.com/u/prod/marvel/i/mg/7/00/67915677ecea1/portrait_uncanny.jpg",
	},
	{
		title: "Giant-Size X-Men: Tribute To Wein & Cockrum #1",
		price: "5.99 €",
		img: "https://cdn.marvel.com/u/prod/marvel/i/mg/7/00/67915677ecea1/portrait_uncanny.jpg",
	},
	{
		title: "Shang-Chi #1",
		price: "3.99 €",
		img: "https://cdn.marvel.com/u/prod/marvel/i/mg/7/00/67915677ecea1/portrait_uncanny.jpg",
	},
	{
		title: "Giant-Size X-Men: Tribute To Wein & Cockrum #1",
		price: "5.99 €",
		img: "https://cdn.marvel.com/u/prod/marvel/i/mg/7/00/67915677ecea1/portrait_uncanny.jpg",
	},
	{
		title: "Avengers #36",
		price: "3.99 €",
		img: "https://cdn.marvel.com/u/prod/marvel/i/mg/7/00/67915677ecea1/portrait_uncanny.jpg",
	},
	{
		title: "Shang-Chi #1",
		price: "3.99 €",
		img: "https://cdn.marvel.com/u/prod/marvel/i/mg/7/00/67915677ecea1/portrait_uncanny.jpg",
	},
	{
		title: "Avengers #36",
		price: "3.99 €",
		img: "https://cdn.marvel.com/u/prod/marvel/i/mg/7/00/67915677ecea1/portrait_uncanny.jpg",
	},
	{
		title: "Giant-Size X-Men: Tribute To Wein & Cockrum #1",
		price: "5.99 €",
		img: "https://cdn.marvel.com/u/prod/marvel/i/mg/7/00/67915677ecea1/portrait_uncanny.jpg",
	},
	{
		title: "Shang-Chi #1",
		price: "3.99 €",
		img: "https://cdn.marvel.com/u/prod/marvel/i/mg/7/00/67915677ecea1/portrait_uncanny.jpg",
	},
];

// TODO separate component for comics, detailed comics, API, tests
const Main = () => {
	return (
		<div className="flex flex-wrap">
			{mockup.map((comic, key) => (
				<div
					key={key}
					className={`flex-basis-1/4 border-2 border-[#1D1D1D] rounded-[5px] p-[13px] w-[336px] h-[170px] relative mb-[20px] ${(key + 1) % 4 === 0 ? 'mr-[0px]' : 'mr-[20px]'}`}
				>
					<div className="flex">
						<img
							src={comic.img}
							alt={comic.title}
							className="w-[95px] h-[142px] object-cover mr-[13px]"
						/>
						<h2 className="text-[16px] font-bold">{comic.title}</h2>
					</div>
					<div className="absolute right-[15px] bottom-[18px] flex flex-col justify-end">
						<span className="text-[19px] font-bold text-right">{comic.price}</span>
						<button
							className="w-[140px] h-[30px] mt-[12px] bg-comicsRed text-white font-semibold py-[4x] px-[30px] rounded-[5px] hover:opacity-75 self-end transition">
							More info
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default Main;
