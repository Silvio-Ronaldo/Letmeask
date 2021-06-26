import styled, { css } from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: stretch;
	height: 100vh;

	main {
		display: flex;
		flex: 8;
		align-items: center;
		justify-content: center;

		padding: 0 2rem;
	}
`;

export const MainContent = styled.div<{ isDarked: boolean }>`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 20rem;
	text-align: center;

	> img {
		align-self: center;
	}

	${props =>
		props.isDarked &&
		css`
			> img {
				filter: invert(38%) sepia(65%) saturate(3856%)
					hue-rotate(241deg) brightness(96%) contrast(86%);
			}
		`}

	form {
		button {
			margin-top: 1rem;
		}

		button,
		input {
			width: 100%;
		}
	}
`;

export const CreateRoom = styled.button`
	margin-top: 4rem;
	height: 3.125rem;
	border-radius: 0.5rem;
	font-weight: 500;
	background-color: ${props => props.theme.colors.createRoomButtonBackground};
	color: ${props => props.theme.colors.createRoomButtonColor};

	display: flex;
	align-items: center;
	justify-content: center;

	border: 0;

	img {
		margin-right: 0.5rem;
	}

	&:hover {
		filter: brightness(0.9);
	}
`;

export const Separator = styled.div`
	font-size: 0.875rem;
	color: ${props => props.theme.colors.separatorColor};
	display: flex;
	align-items: center;

	margin: 2rem 0;

	&::before {
		content: '';
		flex: 1;
		height: 0.0625rem;
		background-color: ${props => props.theme.colors.separatorBackground};
		margin-right: 1rem;
	}

	&::after {
		content: '';
		flex: 1;
		height: 0.0625rem;
		background-color: ${props => props.theme.colors.separatorBackground};
		margin-left: 1rem;
	}
`;
