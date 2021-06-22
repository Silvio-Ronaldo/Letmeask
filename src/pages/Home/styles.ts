import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: stretch;
	height: 100vh;

	aside {
		display: flex;
		flex: 7;
		flex-direction: column;
		justify-content: center;

		background-color: #835afd;
		color: #fff;

		padding: 7.5rem 5rem;

		img {
			max-width: 20rem;
		}

		strong {
			font: 700 2.25rem 'Poppins', sans-serif;
			line-height: 2.625rem;
			margin-top: 1rem;
		}

		p {
			font-size: 1.5rem;
			line-height: 2rem;
			margin-top: 1rem;
			color: #f8f8f8;
		}
	}

	main {
		display: flex;
		flex: 8;
		align-items: center;
		justify-content: center;

		padding: 0 2rem;
	}
`;

export const MainContent = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 20rem;
	text-align: center;

	> img {
		align-self: center;
	}

	form {
		input {
			height: 3.125rem;
			border-radius: 0.5rem;
			padding: 0 1rem;
			background-color: #fff;
			border: 0.0625rem solid #a8a8b3;
		}

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
	background-color: #ea4335;
	color: #fff;

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
	color: #a8a8b3;
	display: flex;
	align-items: center;

	margin: 2rem 0;

	&::before {
		content: '';
		flex: 1;
		height: 0.0625rem;
		background-color: #a8a8b3;
		margin-right: 1rem;
	}

	&::after {
		content: '';
		flex: 1;
		height: 0.0625rem;
		background-color: #a8a8b3;
		margin-left: 1rem;
	}
`;
