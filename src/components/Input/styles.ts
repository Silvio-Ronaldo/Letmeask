import styled from 'styled-components';

export const Container = styled.div`
	input {
		height: 3.125rem;
		border-radius: 0.5rem;
		padding: 0 1rem;
		background-color: ${props => props.theme.colors.inputBackground};
		border: 0.0625rem solid ${props => props.theme.colors.inputBorder};
		width: 100%;
	}
`;
