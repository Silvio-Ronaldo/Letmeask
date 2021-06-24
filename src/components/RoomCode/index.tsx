import React from 'react';

import { Container } from './styles';

import copyImg from '../../assets/images/copy.svg';

type RoomCodeProps = {
	code: string;
};

export function RoomCode({ code }: RoomCodeProps) {
	function copyRoomCodeToClipboard() {
		navigator.clipboard.writeText(code);
	}

	return (
		<Container onClick={copyRoomCodeToClipboard}>
			<div>
				<img src={copyImg} alt="Copiar código da sala" />
			</div>
			<span>Sala #{code}</span>
		</Container>
	);
}
