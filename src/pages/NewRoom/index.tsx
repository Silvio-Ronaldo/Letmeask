import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';

import { useCallback } from 'react';
import { AsideIllustration } from '../../components/AsideIllustration';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { Container, MainContent } from './styles';

import logoImg from '../../assets/images/logo.svg';

export function NewRoom() {
	const handleCreateRoom = useCallback(() => {
		console.log('asasj');
	}, []);

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
