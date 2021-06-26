import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

import { useTheme } from '../../hooks/useTheme';

import { Container } from './styles';

export function ToggleTheme() {
	const { isDarked, toggleTheme } = useTheme();

	return (
		<Container type="button" onClick={toggleTheme} isDarked={isDarked}>
			{isDarked ? <FiSun size={30} /> : <FiMoon size={30} />}
		</Container>
	);
}
