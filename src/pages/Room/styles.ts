import styled, { css } from 'styled-components';

import { LikeButtonQuestion } from '../../components/Question/styles';

export const Container = styled.div`
	header {
		padding: 1.5rem;
		background: ${props => props.theme.colors.headerBackground};
		border-bottom: 0.0625rem solid
			${props => props.theme.colors.roomHeaderBorder};
	}

	main {
		max-width: 50rem;
		margin: 0 auto;

		@media (max-width: 880px) {
			margin: 0 2rem;
		}
	}
`;

export const HeaderContent = styled.div<{ isDarked: boolean }>`
	max-width: 70rem;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;

	> img {
		max-height: 2.8125rem;
	}

	${props =>
		props.isDarked &&
		css`
			> img {
				filter: invert(38%) sepia(65%) saturate(3856%)
					hue-rotate(241deg) brightness(96%) contrast(86%);
			}
		`}

	div {
		display: flex;
		gap: 3rem;

		@media (max-width: 370px) {
			gap: 1rem;

			svg {
				width: 1rem;
			}
		}
	}
`;

export const RoomTitle = styled.div`
	margin: 2rem 0 1.5rem;
	display: flex;
	align-items: center;

	h1 {
		font-family: 'Poppins', sans-serif;
		font-size: 1.5rem;
		color: ${props => props.theme.colors.roomTitleColor};
	}

	span {
		margin-left: 1rem;
		background-color: ${props =>
			props.theme.colors.roomTitleSpanBackground};
		border-radius: 9999px;
		padding: 0.5rem 1rem;
		color: ${props => props.theme.colors.roomTitleSpanColor};
		font-weight: 500;
		font-size: 0.875rem;
	}
`;

export const FormFooter = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 2rem;
	align-items: center;
	margin-top: 1rem;

	div {
		display: flex;
		align-items: center;

		img {
			width: 2rem;
			height: 2rem;
			border-radius: 50%;
		}

		span {
			margin-left: 0.5rem;
			color: ${props => props.theme.colors.roomFormFooterSpanColor};
			font-weight: 500;
			font-size: 0.875rem;
		}
	}

	> span {
		font-size: 0.875rem;
		color: ${props => props.theme.colors.roomFormFooterSpanColor};
		font-weight: 500;

		button {
			background-color: transparent;
			border: 0;
			color: ${props => props.theme.colors.roomFormFooterButtonColor};
			text-decoration: underline;
			font-size: 0.875rem;
		}
	}
`;

export const QuestionList = styled.div`
	margin: 2rem 0;
`;

export const LikeButton = styled(LikeButtonQuestion)<{ liked: boolean }>`
	${props =>
		props.liked &&
		css`
			color: ${props.theme.colors.likeButtonLikedColor};

			svg {
				path {
					fill: ${props.theme.colors.likeButtonLikedSvgFill};
					stroke: ${props.theme.colors.likeButtonLikedSvgStroke};
				}
			}
		`}
`;
