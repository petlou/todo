import styled from 'styled-components'

export const InputContainer = styled.form`
	display: flex;
	gap: 0.5rem;
	width: 100%;
	height: 3.375rem;

	margin-top: -1.6875rem;

	input {
		flex: 1;
		width: 100%;
		height: 100%;

		padding: 1rem;

		background-color: var(--gray-500);
		color: var(--gray-100);

		border: 1px solid black;
		border-radius: 0.5rem;
		outline: 0;
		box-shadow: none;
	}

	button {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;

		padding: 1rem;

		background-color: var(--blue-dark);
		color: var(--gray-100);
		border: 1px solid black;

		border-radius: 0.5rem;

		&:hover {
			background-color: var(--blue);
		}
	}
`
