import React, { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useRoom } from '../../hooks/useRoom';
import { database } from '../../services/firebase';

import { RoomCode } from '../../components/RoomCode';
import { Button } from '../../components/Button';
import { Question } from '../../components/Question';
import { Modal } from '../../components/Modal';

import { Container, HeaderContent, RoomTitle, QuestionList } from './styles';

import logoImg from '../../assets/images/logo.svg';
import deleteImg from '../../assets/images/delete.svg';

type RoomParams = {
	id: string;
};

export function AdminRoom() {
	const params = useParams<RoomParams>();
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [modalQuestionId, setModalQuestionId] = useState('');

	const roomId = params.id;

	const { title, questions } = useRoom(roomId);

	const handleModal = useCallback(() => {
		setModalIsOpen(!modalIsOpen);
	}, [modalIsOpen]);

	const handleDeleteQuestion = useCallback(
		(questionId: string) => {
			setModalQuestionId(questionId);
			handleModal();
		},
		[handleModal],
	);

	const handleConfirmDeleteQuestion = useCallback(async () => {
		await database
			.ref(`rooms/${roomId}/questions/${modalQuestionId}`)
			.remove();

		handleModal();
	}, [roomId, modalQuestionId, handleModal]);

	return (
		<>
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
								>
									<button
										type="button"
										onClick={() =>
											handleDeleteQuestion(question.id)
										}
									>
										<img
											src={deleteImg}
											alt="Excluir pergunta"
										/>
									</button>
								</Question>
							);
						})}
					</QuestionList>
				</main>
			</Container>

			<Modal
				isOpen={modalIsOpen}
				handleModal={handleModal}
				handleConfirmDelete={handleConfirmDeleteQuestion}
			/>
		</>
	);
}
