import styled, { css } from 'styled-components';

export const Container = styled.button<{
	outlined: boolean;
	color: string | undefined;
	backgroundColor: string | undefined;
}>`
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

	${props =>
		props.outlined &&
		css`
			background-color: #fff;
			border: 0.0625rem solid #835afd;
			color: #835afd;
		`}

	${props =>
		props.color &&
		css`
			color: ${props.color};
		`}

	${props =>
		props.backgroundColor &&
		css`
			background-color: ${props.backgroundColor};
		`}

	&:not(:disabled):hover {
		filter: brightness(0.9);
	}

	&:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}
`;
