import React from 'react';
import { useParams } from 'react-router-dom';

import { useRoom } from '../../hooks/useRoom';

import { RoomCode } from '../../components/RoomCode';
import { Button } from '../../components/Button';
import { Question } from '../../components/Question';

import { Container, HeaderContent, RoomTitle, QuestionList } from './styles';

import logoImg from '../../assets/images/logo.svg';

type RoomParams = {
	id: string;
};

export function AdminRoom() {
	const params = useParams<RoomParams>();

	const roomId = params.id;

	const { title, questions } = useRoom(roomId);

	return (
		<Container>
			<header>
				<HeaderContent>
					<img src={logoImg} alt="Letmeask" />
					<div>
						<RoomCode code={roomId} />
						<Button isOutlined>Encerrar sala</Button>
					</div>
				</HeaderContent>
			</header>

			<main>
				<RoomTitle>
					<h1>Sala {title}</h1>
					{questions.length > 0 && (
						<span>{questions.length} pergunta(s)</span>
					)}
				</RoomTitle>

				<QuestionList>
					{questions.map(question => {
						return (
							<Question
								key={question.id}
								content={question.content}
								author={question.author}
							/>
						);
					})}
				</QuestionList>
			</main>
		</Container>
	);
}
