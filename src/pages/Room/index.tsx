import React from 'react';
import { useParams } from 'react-router-dom';

import { Container, HeaderContent, RoomTitle, FormFooter } from './styles';

import { Button } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';

import logoImg from '../../assets/images/logo.svg';

type RoomParams = {
	id: string;
};

export function Room() {
	const params = useParams<RoomParams>();

	return (
		<Container>
			<header>
				<HeaderContent>
					<img src={logoImg} alt="Letmeask" />
					<RoomCode code={params.id} />
				</HeaderContent>
			</header>

			<main>
				<RoomTitle>
					<h1>Sala React</h1>
					<span>4 perguntas</span>
				</RoomTitle>

				<form>
					<textarea placeholder="O que você quer perguntar?" />

					<FormFooter>
						<span>
							Para enviar uma pergunta,
							<button type="button">faça seu login</button>.
						</span>
						<Button type="submit">Enviar perguntas</Button>
					</FormFooter>
				</form>
			</main>
		</Container>
	);
}
