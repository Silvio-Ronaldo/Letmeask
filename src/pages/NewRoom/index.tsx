import React from 'react';

import { Button } from '../../components/Button';

import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';

import { Container, MainContent } from './styles';

export function NewRoom() {
	return (
		<Container>
			<aside>
				<img
					src={illustrationImg}
					alt="Ilustração representativa de perguntas e respostas"
				/>
				<strong>Crie salas de Q&amp;A ao-vivo.</strong>
				<p>Tire as dúvidas de sua audiências em tempo real.</p>
			</aside>
			<main>
				<MainContent>
					<img src={logoImg} alt="Logo do Letmeask" />
					<h2>Crie uma nova sala</h2>
					<form>
						<input type="text" placeholder="Nome da sala" />
						<Button type="submit">Criar sala</Button>
					</form>
					<p>
						Quer entrar em uma sala existente?
						<a href="/#"> Clique aqui.</a>
					</p>
				</MainContent>
			</main>
		</Container>
	);
}
