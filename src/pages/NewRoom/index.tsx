import React, { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';

import { database } from '../../services/firebase';
import { useAuth } from '../../hooks/useAuth';

import { AsideIllustration } from '../../components/AsideIllustration';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { Container, MainContent } from './styles';

import logoImg from '../../assets/images/logo.svg';

type CreateRoomFormData = {
	roomName: string;
};

export function NewRoom() {
	const { user } = useAuth();
	const history = useHistory();

	const handleCreateRoom = useCallback(
		async ({ roomName }: CreateRoomFormData) => {
			if (roomName.trim() === '') {
				return;
			}

			const roomRef = database.ref('rooms');

			const firebaseRoom = await roomRef.push({
				title: roomName,
				authorId: user?.id,
			});

			history.push(`/rooms/${firebaseRoom.key}`);
		},
		[user?.id, history],
	);

	return (
		<Container>
			<AsideIllustration />
			<main>
				<MainContent>
					<img src={logoImg} alt="Logo do Letmeask" />
					<h2>Crie uma nova sala</h2>
					<Form onSubmit={handleCreateRoom}>
						<Input
							name="roomName"
							type="text"
							placeholder="Nome da sala"
						/>
						<Button type="submit">Criar sala</Button>
					</Form>
					<p>
						Quer entrar em uma sala existente?
						<Link to="/"> Clique aqui.</Link>
					</p>
				</MainContent>
			</main>
		</Container>
	);
}
