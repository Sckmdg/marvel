import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './header';

const Layout = () => {
	return (
		<div>
			<Header />
			<div style={{ padding: '0 48px' }}>
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;
