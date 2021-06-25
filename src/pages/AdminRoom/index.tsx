import React, { useCallback, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { useRoom } from '../../hooks/useRoom';
import { database } from '../../services/firebase';

import { RoomCode } from '../../components/RoomCode';
import { Button } from '../../components/Button';
import { Question } from '../../components/Question';
import { Modal } from '../../components/Modal';

import { Container, HeaderContent, RoomTitle, QuestionList } from './styles';

import logoImg from '../../assets/images/logo.svg';
import deleteImg from '../../assets/images/delete.svg';
import checkImg from '../../assets/images/check.svg';
import answerImg from '../../assets/images/answer.svg';

type RoomParams = {
	id: string;
};

export function AdminRoom() {
	const params = useParams<RoomParams>();
	const history = useHistory();

	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [modalQuestionId, setModalQuestionId] = useState('');
	const [endedRoom, setEndedRoom] = useState(false);
	const [action, setAction] = useState('');

	const roomId = params.id;

	const { title, questions } = useRoom(roomId);

	const handleModal = useCallback(() => {
		setModalIsOpen(!modalIsOpen);
	}, [modalIsOpen]);

	const handleEndRoom = useCallback(() => {
		setEndedRoom(!endedRoom);
		setAction('endRoom');
		handleModal();
	}, [endedRoom, handleModal]);

	const handleDeleteQuestion = useCallback(
		(questionId: string) => {
			setModalQuestionId(questionId);
			setAction('deleteQuestion');
			handleModal();
		},
		[handleModal],
	);

	const handleConfirmAction = useCallback(async () => {
		if (endedRoom) {
			await database.ref(`rooms/${roomId}`).update({
				endedAt: new Date(),
			});

			history.push('/');
		} else {
			await database
				.ref(`rooms/${roomId}/questions/${modalQuestionId}`)
				.remove();
		}

		handleModal();
	}, [endedRoom, roomId, modalQuestionId, handleModal, history]);

	const handleCheckQuestionAsAnswered = useCallback(
		async (questionId: string) => {
			await database
				.ref(`rooms/${roomId}/questions/${questionId}`)
				.update({
					isAnswered: true,
				});
		},
		[roomId],
	);

	const handleHighlightQuestion = useCallback(
		async (questionId: string) => {
			await database
				.ref(`rooms/${roomId}/questions/${questionId}`)
				.update({
					isHighlighted: true,
				});
		},
		[roomId],
	);

	return (
		<>
			<Container>
				<header>
					<HeaderContent>
						<img src={logoImg} alt="Letmeask" />
						<div>
							<RoomCode code={roomId} />
							<Button onClick={handleEndRoom} isOutlined>
								Encerrar sala
							</Button>
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
									isAnswered={question.isAnswered}
									isHighlighted={question.isHighlighted}
								>
									{!question.isAnswered && (
										<>
											<button
												type="button"
												onClick={() =>
													handleCheckQuestionAsAnswered(
														question.id,
													)
												}
											>
												<img
													src={checkImg}
													alt="Marcar como respondida"
												/>
											</button>

											<button
												type="button"
												onClick={() =>
													handleHighlightQuestion(
														question.id,
													)
												}
											>
												<img
													src={answerImg}
													alt="Dar destaque à pergunta"
												/>
											</button>
										</>
									)}

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
				handleAction={handleConfirmAction}
				action={action}
			/>
		</>
	);
}
