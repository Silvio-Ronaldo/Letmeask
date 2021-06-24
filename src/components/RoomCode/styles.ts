import styled from 'styled-components';

export const Container = styled.button`
	height: 2.5rem;
	border-radius: 0.5rem;
	overflow: hidden;

	background-color: #fff;
	border: 0.0625rem solid #835afd;

	display: flex;

	div {
		background-color: #835afd;
		padding: 0 0.75rem;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
	}

	span {
		display: block;
		align-self: center;
		flex: 1;
		padding: 0 1rem 0 0.75rem;
		width: 15rem;
		font-size: 0.875rem;
		font-weight: 500;
	}
`;
