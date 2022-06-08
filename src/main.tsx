import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';

import { HelmetProvider } from 'react-helmet-async';
import { CommonContextProvider } from '$context/CommonContext';

import '$style/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<CommonContextProvider>
		<React.StrictMode>
			<HelmetProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</HelmetProvider>
		</React.StrictMode>
	</CommonContextProvider>,
);
