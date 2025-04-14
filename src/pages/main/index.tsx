import React, { useState } from 'react';
import { IComics } from 'interfaces';
import {Cover, Detailed} from "components/comics";

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

const Main = () => {
	const [open, setOpen] = useState(false);

	const onOpenDetailed = (id: string) => {
		console.info(id);
		setOpen(true);
	};

	return (
		<div className="flex flex-wrap">
			{mockup.map((comic, key) => (
				<Cover
					key={key}
					item={comic}
					className={(key + 1) % 4 === 0 ? 'mr-[0px]' : 'mr-[20px]'}
					onOpenDetailed={onOpenDetailed}
				/>
			))}

			{open && (
				<Detailed
					open={open}
					setOpen={setOpen}
				/>
			)}
		</div>
	);
};

export default Main;
