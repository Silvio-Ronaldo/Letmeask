import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AuthContextProvider } from './contexts/AuthContext';
import { ThemeContextProvider } from './contexts/ThemeContext';

import { Routes } from './routes';

import GlobalStyle from './styles/global';

function App() {
	return (
		<BrowserRouter>
			<ThemeContextProvider>
				<AuthContextProvider>
					<Routes />
					<GlobalStyle />
				</AuthContextProvider>
			</ThemeContextProvider>
		</BrowserRouter>
	);
}

export default App;
