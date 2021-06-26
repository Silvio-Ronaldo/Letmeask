import styled, { css } from 'styled-components';

export const Container = styled.div<{
	isAnswered: boolean;
	isHighlighted: boolean;
}>`
	background-color: ${props => props.theme.colors.questionBackground};
	border-radius: 0.5rem;
	box-shadow: 0 0.125rem 0.75rem rgba(0, 0, 0, 0.4);
	padding: 1.5rem;
	margin-top: 0.5rem;

	${props =>
		props.isHighlighted &&
		!props.isAnswered &&
		css`
			background: ${props.theme.colors.questionHighlightedBackground};
			border: 0.0625rem solid
				${props.theme.colors.questionHighlightedBorder};
			color: ${props.theme.colors.questionHighlightedColor};
		`}

	${props =>
		props.isAnswered &&
		css`
			background: ${props.theme.colors.questionAnsweredBackground};
		`}

	p {
		color: ${props => props.theme.colors.questionParagraphColor};
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

			svg {
				path,
				circle {
					${props =>
						props.isHighlighted &&
						!props.isAnswered &&
						css`
							stroke: #835afd;
						`}

					${props =>
						props.isAnswered &&
						css`
							stroke: #ffffff;
						`}
				}
			}
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
		color: ${props => props.theme.colors.userInfoSpanColor};
		font-size: 0.875rem;
	}
`;

export const LikeButtonQuestion = styled.button`
	display: flex;
	align-items: flex-end;
	color: ${props => props.theme.colors.likeButtonColor};
	gap: 0.5rem;

	&:hover {
		filter: brightness(0.7);
	}
`;
