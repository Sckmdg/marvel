import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './header';
import Breadcrumb from "./breadcrumb";

const Layout = () => {
	return (
		<div className="quicksand min-h-screen bg-white">
			<Header />
			<Breadcrumb />
			<Outlet />
		</div>
	);
};

export default Layout;
