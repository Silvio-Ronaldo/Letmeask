import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../../components/Button';
import { AsideIllustration } from '../../components/AsideIllustration';

import { Container, MainContent } from './styles';

import logoImg from '../../assets/images/logo.svg';

export function NewRoom() {
	return (
		<Container>
			<AsideIllustration />
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
						<Link to="/"> Clique aqui.</Link>
					</p>
				</MainContent>
			</main>
		</Container>
	);
}
