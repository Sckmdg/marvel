import React from 'react';
import { useRouteError, NavLink } from 'react-router-dom';

const ErrorPage = () => {
	const error = useRouteError() as { statusText?: string; message?: string };
	console.error(error);

	return (
		<main className="flex-grow flex flex-col items-center justify-center text-center px-4">
			<h1 className="text-6xl font-bold mb-4">404</h1>
			<p className="text-xl text-gray-600 mb-6">Page Not Found</p>
			<NavLink
				to="/marvel"
				className="pb-2 text-blue-500"
			>
				Return to main page
			</NavLink>
			<p>
				<i>{error?.statusText || error?.message}</i>
			</p>
		</main>
	);
};

export default ErrorPage;
