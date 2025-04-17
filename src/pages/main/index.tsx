import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ExclamationTriangleIcon } from '@heroicons/react/16/solid';

import { IComics } from 'interfaces';
import { Cover, Detailed, Loader } from 'components';
import { generateCoverList } from 'utils';

const Main = () => {
	const location = useLocation();
	const [open, setOpen] = useState(false);
	const [items, setItems] = useState<IComics[]>([]);
	const [hasMore, setHasMore] = useState(true);
	const [id, setId] = useState<string | null>(null);
	const [error, setError] = useState<string | null>(null);

	const demonstrateError = () => {
		setError('Something went wrong while fetching comics');
		setTimeout(() => setError(null), 3000);
	};

	// @ts-ignore Just to demonstrate fallback scenario
	window.demonstrateError = demonstrateError;

	useEffect(() => {
		console.info(`If api would work i would pass changes in this hook - url changed to ${location.pathname}`);
	}, [location]);

	const fetchData = () => {
		return generateCoverList();
	};

	const loadMore =  useCallback(() => {
		try {
			if (items.length >= 100) {
				setHasMore(false);
				return;
			}

			const newItems = fetchData();
			setTimeout(() => {
				setItems((prev) => [...prev, ...newItems]);
			}, 2000);
		} catch (e) {
			demonstrateError();
		}
	}, [items.length]);

	useEffect(() => {
		loadMore();
	}, [loadMore]);

	const onOpenDetailed = (id: string) => {
		setId(id);
		setOpen(true);
	};

	const onCloseDetailed = () => {
		setId(null);
		setOpen(false);
	};

	return (
		<>
			<InfiniteScroll
				className="flex flex-wrap"
				dataLength={items.length}
				next={loadMore}
				hasMore={hasMore}
				loader={<Loader />}
				endMessage={
					<p className="text-center py-4 text-gray-500">
						<b>Yay! You have seen it all</b>
					</p>
				}
			>
				{items.map((item, key) => (
					<Cover
						key={key}
						item={item}
						className={(key + 1) % 4 === 0 ? 'mr-[0px]' : 'mr-[20px]'}
						onOpenDetailed={onOpenDetailed}
					/>
				))}
			</InfiniteScroll>

			{open && (
				<Detailed
					open={open}
					id={id}
					onCloseDetailed={onCloseDetailed}
				/>
			)}

			{error && (
				<div className="fixed top-4 right-4 p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400">
					<h2 className="font-medium flex items-center mb-[10px]">
						<ExclamationTriangleIcon className="size-6 text-red-600 mr-[10px]" />
						API Error!
					</h2>
					<p>Something went wrong while fetching comics</p>
				</div>
			)}
		</>
	);
};

export default Main;
