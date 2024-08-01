import styled from 'styled-components'

export const SvgContainer = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	background-color: transparent;

	width: 24px;
	height: 24px;

	border-radius: 4px;

	cursor: pointer;

	transition: 0.2s;

	.svg-path {
		fill: var(--gray-300);
	}

	&:hover {
		background-color: var(--gray-400);
	}

	&:hover .svg-path {
		fill: var(--danger);
	}
`
