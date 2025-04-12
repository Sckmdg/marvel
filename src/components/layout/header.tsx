import React, {useMemo} from 'react';
import { NavLink } from 'react-router-dom';
import logo from 'assets/logo2.svg';

const Header = () => {
	const navigation = useMemo(() => [
		{ to: '/', label: 'All' },
		{ to: '/comic', label: 'Comic' },
		{ to: '/magazine', label: 'Magazine' },
		{ to: '/digital', label: 'Digital comic' },
	], []);

	return (
		<header className="w-full h-[112px] bg-black flex items-center">
			<div className="flex items-center mx-auto max-w-7xl">
				<NavLink to="/">
					<img
						src={logo}
						alt="Comic site logo with speech bubble"
						className="pr-[60px]"
					/>
				</NavLink>
				<nav className="flex text-white text-lg font-normal space-x-[81px]">
					{navigation.map((item, key) => (
						<NavLink
							key={key}
							to={item.to}
							className={({ isActive }) => {
								const baseClass = `transition `;

								return isActive ? `${baseClass} text-red-600` : `${baseClass} hover:text-red-600`;
							}}
						>
							{item.label}
						</NavLink>
					))}
				</nav>
			</div>
		</header>

	);
};

export default Header;
