import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AuthContextProvider } from './contexts/AuthContext';

import { Routes } from './routes';

import GlobalStyle from './styles/global';

function App() {
	return (
		<BrowserRouter>
			<AuthContextProvider>
				<Routes />
				<GlobalStyle />
			</AuthContextProvider>
		</BrowserRouter>
	);
}

export default App;
