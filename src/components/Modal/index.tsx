import React from 'react';
import ReactModal from 'react-modal';

import { Button } from '../Button';

import { ModalContent, Buttons } from './styles';

type ModalProps = {
	isOpen: boolean;
	handleModal: () => void;
	handleAction: () => void;
	action: string;
};

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		borderRadius: '10px',
		boxShadow: '1px 2px 10px #3f3f3f',
		padding: 0,
		border: 0,
		width: '90%',
	},
};

export function Modal({
	isOpen,
	handleModal,
	handleAction,
	action,
}: ModalProps) {
	return (
		<ReactModal
			isOpen={isOpen}
			style={customStyles}
			contentLabel="Modal para excluir ou encerrar"
			ariaHideApp={false}
		>
			<ModalContent>
				{action === 'deleteQuestion' ? (
					<svg
						width="60"
						height="60"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M3 5.99988H5H21"
							stroke="#737380"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M8 5.99988V3.99988C8 3.46944 8.21071 2.96074 8.58579 2.58566C8.96086 2.21059 9.46957 1.99988 10 1.99988H14C14.5304 1.99988 15.0391 2.21059 15.4142 2.58566C15.7893 2.96074 16 3.46944 16 3.99988V5.99988M19 5.99988V19.9999C19 20.5303 18.7893 21.039 18.4142 21.4141C18.0391 21.7892 17.5304 21.9999 17 21.9999H7C6.46957 21.9999 5.96086 21.7892 5.58579 21.4141C5.21071 21.039 5 20.5303 5 19.9999V5.99988H19Z"
							stroke="#737380"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				) : (
					<svg
						width="60"
						height="60"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle
							cx="12.0003"
							cy="11.9998"
							r="9.00375"
							stroke="#737380"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M8.44287 12.3391L10.6108 14.507L10.5968 14.493L15.4878 9.60193"
							stroke="#737380"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				)}

				<strong>
					{action === 'deleteQuestion'
						? 'Excluir pergunta'
						: 'Encerrar sala'}
				</strong>
				<span>
					{action === 'deleteQuestion'
						? 'Tem certeza que você deseja excluir esta pergunta?'
						: 'Tem certeza que você deseja encerrar esta sala?'}
				</span>
				<Buttons>
					<Button
						onClick={handleModal}
						color="#808090"
						backgroundColor="#eee"
					>
						Cancelar
					</Button>
					<Button
						onClick={handleAction}
						color="#fff"
						backgroundColor="#e13a3a"
					>
						Sim,{' '}
						{action === 'deleteQuestion' ? 'excluir' : 'encerrar'}
					</Button>
				</Buttons>
			</ModalContent>
		</ReactModal>
	);
}
