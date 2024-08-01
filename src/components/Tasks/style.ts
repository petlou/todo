import styled from 'styled-components'

export const TasksContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	gap: 1.5rem;

	width: 100%;

	hr {
		width: 90%;
		border: 1px solid var(--gray-400);
	}
`

export const HeaderContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	width: 100%;
`

export const TextContent = styled.h2<{ $inputColor?: '--purple' | '--blue' }>`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	gap: 0.5rem;
	font-size: 0.875rem;
	color: var(${props => props.$inputColor});

	span {
		//alterei o font-size - era 12px
		padding: 0.25rem 1rem; // alterei - era 2px e 8px
		color: var(--gray-200);
		background-color: var(--gray-400);
		border-radius: 999px;
	}
`
