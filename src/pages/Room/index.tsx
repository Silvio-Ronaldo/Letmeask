import React, { useCallback, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { useAuth } from '../../hooks/AuthContext';
import { database } from '../../services/firebase';

import { RoomCode } from '../../components/RoomCode';
import { Button } from '../../components/Button';
import { Textarea } from '../../components/Textarea';

import { Container, HeaderContent, RoomTitle, FormFooter } from './styles';

import logoImg from '../../assets/images/logo.svg';

type RoomParams = {
	id: string;
};

type SendQuestionFormData = {
	newQuestion: string;
};

export function Room() {
	const params = useParams<RoomParams>();
	const { user } = useAuth();
	const formRef = useRef<FormHandles>(null);

	const roomId = params.id;

	const handleSendQuestion = useCallback(
		async ({ newQuestion }: SendQuestionFormData) => {
			if (newQuestion.trim() === '') {
				return;
			}

			if (!user) {
				throw new Error('You must be logged in');
			}

			const question = {
				content: newQuestion,
				author: {
					name: user.name,
					avatar: user.avatar,
				},
				isHighlighted: false,
				isAnswered: false,
			};

			await database.ref(`rooms/${roomId}/questions`).push(question);

			formRef.current?.reset();
		},
		[roomId, user],
	);

	return (
		<Container>
			<header>
				<HeaderContent>
					<img src={logoImg} alt="Letmeask" />
					<RoomCode code={roomId} />
				</HeaderContent>
			</header>

			<main>
				<RoomTitle>
					<h1>Sala React</h1>
					<span>4 perguntas</span>
				</RoomTitle>

				<Form ref={formRef} onSubmit={handleSendQuestion}>
					<Textarea
						name="newQuestion"
						placeholder="O que você quer perguntar?"
					/>

					<FormFooter>
						{user ? (
							<div>
								<img src={user.avatar} alt={user.name} />
								<span>{user.name}</span>
							</div>
						) : (
							<span>
								Para enviar uma pergunta,{' '}
								<button type="button">faça seu login</button>.
							</span>
						)}
						<Button type="submit" disabled={!user}>
							Enviar perguntas
						</Button>
					</FormFooter>
				</Form>
			</main>
		</Container>
	);
}
