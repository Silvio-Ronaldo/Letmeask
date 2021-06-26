import React from 'react';

import illustrationImg from '../../assets/images/illustration.svg';

import { Container } from './styles';

export function AsideIllustration() {
	return (
		<Container>
			<img
				src={illustrationImg}
				alt="Ilustração representativa de perguntas e respostas"
			/>
			<strong>Crie salas de Q&amp;A ao-vivo.</strong>
			<p>Tire as dúvidas de sua audiência em tempo real.</p>
		</Container>
	);
}
