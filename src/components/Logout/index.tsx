import React from 'react';
import { FiLogOut } from 'react-icons/fi';

import { useAuth } from '../../hooks/useAuth';

import { Container } from './styles';

export function Logout() {
	const { signOut } = useAuth();

	return (
		<Container type="button" onClick={signOut}>
			<FiLogOut size={30} />
		</Container>
	);
}
