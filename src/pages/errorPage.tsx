import React from 'react';
import { useRouteError, NavLink } from 'react-router-dom';

const ErrorPage = () => {
	const error = useRouteError() as { statusText?: string; message?: string };
	console.error(error);

	return (
		<div id="error-page">
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<NavLink to="/">Return to main page</NavLink>
			<p>
				<i>{error?.statusText || error?.message}</i>
			</p>
		</div>
	);
};

export default ErrorPage;
