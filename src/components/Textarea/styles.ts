import styled from 'styled-components';

export const Container = styled.div`
	textarea {
		width: 100%;
		border: 0;
		outline: none;
		padding: 1rem;
		border-radius: 0.5rem;
		background-color: ${props => props.theme.colors.textAreaBackground};
		color: ${props => props.theme.colors.textAreaColor};
		box-shadow: 0 0.125rem 0.75rem rgba(0, 0, 0, 0.04);
		resize: vertical;
		min-height: 8.125rem;
	}
`;
