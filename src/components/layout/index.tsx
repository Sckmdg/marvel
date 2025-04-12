import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './header';
import Breadcrumb from "./breadcrumb";

const Layout = () => {
	return (
		<div className="quicksand min-h-screen bg-white">
			<Header />
			<div className="text-sm px-12 mt-4 mx-auto">
				<Breadcrumb />
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;
