import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';

import { useAuth } from '../../hooks/useAuth';
import { database } from '../../services/firebase';

import { AsideIllustration } from '../../components/AsideIllustration';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { Container, MainContent, CreateRoom, Separator } from './styles';

import logoImg from '../../assets/images/logo.svg';
import googleIconImg from '../../assets/images/google-icon.svg';

type OpenRoomFormData = {
	roomCode: string;
};

export function Home() {
	const history = useHistory();
	const { user, signInWithGoogle } = useAuth();

	const handleCreateRoom = useCallback(async () => {
		if (!user) {
			await signInWithGoogle();
		}

		history.push('/rooms/new');
	}, [user, signInWithGoogle, history]);

	const handleJoinRoom = useCallback(
		async ({ roomCode }: OpenRoomFormData) => {
			if (roomCode.trim() === '') {
				return;
			}

			const roomRef = await database.ref(`rooms/${roomCode}`).get();

			if (!roomRef.exists()) {
				alert('Room does not exists.');
				return;
			}

			if (roomRef.val().endedAt) {
				alert('Room already closed.');
				return;
			}

			history.push(`/rooms/${roomCode}`);
		},
		[history],
	);

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
					<Form onSubmit={handleJoinRoom}>
						<Input
							name="roomCode"
							type="text"
							placeholder="Digite o código da sala"
						/>
						<Button type="submit">Entrar na sala</Button>
					</Form>
				</MainContent>
			</main>
		</Container>
	);
}
