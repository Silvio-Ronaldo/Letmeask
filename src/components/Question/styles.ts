import styled, { css } from 'styled-components';

export const Container = styled.div<{
	isAnswered: boolean;
	isHighlighted: boolean;
}>`
	background-color: #fefefe;
	border-radius: 0.5rem;
	box-shadow: 0 0.125rem 0.75rem rgba(0, 0, 0, 0.4);
	padding: 1.5rem;
	margin-top: 0.5rem;

	${props =>
		props.isHighlighted &&
		!props.isAnswered &&
		css`
			background: #f4f0ff;
			border: 0.0625rem solid #835afd;
			color: #29292e;
		`}

	${props =>
		props.isAnswered &&
		css`
			background: #dbdcdd;
		`}

	p {
		color: #29292e;
	}

	footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 1.5rem;

		button {
			border: 0;
			background: transparent;
			transition: filter 0.2s;
		}

		div {
			display: flex;
			gap: 1rem;
		}
	}
`;

export const UserInfo = styled.div`
	display: flex;
	align-items: center;

	img {
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
	}

	span {
		margin-left: 0.5rem;
		color: #737380;
		font-size: 0.875rem;
	}
`;

export const LikeButtonQuestion = styled.button`
	display: flex;
	align-items: flex-end;
	color: #737380;
	gap: 0.5rem;

	&:hover {
		filter: brightness(0.7);
	}
`;
