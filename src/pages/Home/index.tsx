import React from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/AuthContext';

import { Button } from '../../components/Button';
import { AsideIllustration } from '../../components/AsideIllustration';

import { Container, MainContent, CreateRoom, Separator } from './styles';

import logoImg from '../../assets/images/logo.svg';
import googleIconImg from '../../assets/images/google-icon.svg';

export function Home() {
	const history = useHistory();
	const { user, signInWithGoogle } = useAuth();

	async function handleCreateRoom() {
		if (!user) {
			await signInWithGoogle();
		}

		history.push('/rooms/new');
	}

	return (
		<Container>
			<AsideIllustration />
			<main>
				<MainContent>
					<img src={logoImg} alt="Logo do Letmeask" />
					<CreateRoom onClick={handleCreateRoom} type="button">
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
