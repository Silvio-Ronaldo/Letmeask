import styled from 'styled-components';

export const ModalContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 2rem 6rem;

	svg {
		path {
			stroke: #e13a3a;
		}
	}

	strong {
		margin-top: 2rem;
		font-size: 1.5rem;
		font-family: 'Poppins', sans-serif;
		font-weight: 700;
		color: #29292e;
	}

	span {
		margin-top: 1rem;
		font-size: 1rem;
		color: #737373;
	}
`;

export const Buttons = styled.div`
	display: flex;
	gap: 0.5rem;

	margin-top: 3rem;
`;
