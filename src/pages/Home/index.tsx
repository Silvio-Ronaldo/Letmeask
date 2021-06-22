import React from 'react';

import { Button } from '../../components/Button';

import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';
import googleIconImg from '../../assets/images/google-icon.svg';

import { Container, MainContent, CreateRoom, Separator } from './styles';

export function Home() {
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
					<CreateRoom type="button">
						<img src={googleIconImg} alt="Logo do Google" />
						Crie sua sala com o Google
					</CreateRoom>
					<Separator>ou entre em uma sala</Separator>
					<form>
						<input
							type="text"
							placeholder="Digite o código da sala"
						/>
						<Button type="submit">Entrar na sala</Button>
					</form>
				</MainContent>
			</main>
		</Container>
	);
}
