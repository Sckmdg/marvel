import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';

import { IComics } from 'interfaces';
import { Cover, Detailed, Loader } from 'components';
import { generateCoverList } from 'utils';

const Main = () => {
	const location = useLocation();
	const [open, setOpen] = useState(false);
	const [items, setItems] = useState<IComics[]>([]);
	const [hasMore, setHasMore] = useState(true);

	useEffect(() => {
		console.info(`If api would work i would pass changes in this hook - url changed to ${location.pathname}`);
	}, [location]);

	const fetchData = () => {
		return generateCoverList();
	};

	const loadMore = async () => {
		if (items.length >= 100) {
			setHasMore(false);
			return;
		}

		const newItems = fetchData();
		setTimeout(() => {
			setItems((prev) => [...prev, ...newItems]);
		}, 2000);
	};

	useEffect(() => {
		loadMore();
	}, []);

	const onOpenDetailed = (id: string) => {
		console.info(id);
		setOpen(true);
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
					setOpen={setOpen}
				/>
			)}
		</>
	);
};

export default Main;
