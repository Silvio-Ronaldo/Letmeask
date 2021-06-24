import styled from 'styled-components';

export const Container = styled.div`
	background-color: #fefefe;
	border-radius: 0.5rem;
	box-shadow: 0 0.125rem 0.75rem rgba(0, 0, 0, 0.4);
	padding: 1.5rem;
	margin-top: 0.5rem;

	p {
		color: #29292e;
	}

	footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 1.5rem;
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