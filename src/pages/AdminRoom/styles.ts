import styled, { css } from 'styled-components';

export const Container = styled.div`
	header {
		padding: 1.5rem;
		background: ${props => props.theme.colors.headerBackground};
		border-bottom: 0.0625rem solid
			${props => props.theme.colors.adminRoomHeaderBorder};
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

	> div {
		display: flex;
		gap: 2rem;

		@media (max-width: 370px) {
			gap: 1rem;

			svg {
				width: 1rem;
			}
		}

		> button {
			height: 2.5rem;
		}
	}
`;

export const CloseRoom = styled.div`
	display: flex;
	align-items: center;
	height: 2.5rem;

	button {
		height: 2.5rem;
	}

	div {
		@media (max-width: 520px) {
			display: none;
		}
	}
`;

export const LockButton = styled.button<{ isDarked: boolean }>`
	display: none;
	background: transparent;
	border: 0;
	color: ${props => props.theme.colors.buttonBackground};

	@media (max-width: 520px) {
		display: flex;
		align-items: center;
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
			props.theme.colors.adminRoomSpanBackground};
		border-radius: 9999px;
		padding: 0.5rem 1rem;
		color: ${props => props.theme.colors.adminRoomSpanColor};
		font-weight: 500;
		font-size: 0.875rem;
	}
`;

export const QuestionList = styled.div`
	margin: 2rem 0;
`;
