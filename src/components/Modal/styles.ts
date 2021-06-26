import styled from 'styled-components';

export const ModalContent = styled.div`
	display: flex;
	background-color: ${props => props.theme.colors.modalBackground};
	flex-direction: column;
	justify-content: center;
	text-align: center;
	align-items: center;
	padding: 2rem 6rem;

	@media (max-width: 380px) {
		padding: 2rem 3rem;
	}

	svg {
		path {
			stroke: ${props => props.theme.colors.modalSvgStroke};
		}
	}

	strong {
		margin-top: 2rem;
		font-size: 1.5rem;
		font-family: 'Poppins', sans-serif;
		font-weight: 700;
		color: ${props => props.theme.colors.modalStrongColor};
	}

	span {
		margin-top: 1rem;
		font-size: 1rem;
		color: ${props => props.theme.colors.modalSpanColor};
	}
`;

export const Buttons = styled.div`
	display: flex;
	gap: 0.5rem;

	margin-top: 3rem;

	@media (max-width: 380px) {
		flex-direction: column;
	}
`;
