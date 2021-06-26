import React, {
	createContext,
	useState,
	useLayoutEffect,
	ReactNode,
} from 'react';
import { ThemeProvider } from 'styled-components';

import { useCallback } from 'react';
import lightTheme from '../styles/themes/light';
import darkTheme from '../styles/themes/dark';

type ThemeContextData = {
	isDarked: boolean;
	toggleTheme: () => void;
};

export const ThemeContext = createContext({} as ThemeContextData);

type ThemeContextProviderProps = {
	children: ReactNode;
};

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
	const [isDarked, setIsDarked] = useState(true);

	useLayoutEffect(() => {
		const dark = localStorage.getItem('isDarked');

		if (dark) {
			setIsDarked(JSON.parse(dark));
		}
	}, []);

	const toggleTheme = useCallback(() => {
		localStorage.setItem('isDarked', JSON.stringify(!isDarked));

		setIsDarked(!isDarked);
	}, [isDarked]);

	return (
		<ThemeContext.Provider value={{ isDarked, toggleTheme }}>
			<ThemeProvider theme={isDarked ? darkTheme : lightTheme}>
				{children}
			</ThemeProvider>
		</ThemeContext.Provider>
	);
}
