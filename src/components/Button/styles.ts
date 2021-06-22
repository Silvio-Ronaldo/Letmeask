import styled from 'styled-components';

export const Container = styled.button`
	margin-top: 4rem;
	height: 3.125rem;
	border-radius: 0.5rem;
	font-weight: 500;
	background-color: #835afd;
	color: #fff;
	padding: 0 2rem;

	display: flex;
	align-items: center;
	justify-content: center;

	border: 0;

	img {
		margin-right: 0.5rem;
	}

	&:not(:disabled):hover {
		filter: brightness(0.9);
	}

	&:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}
`;
