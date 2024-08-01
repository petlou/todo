import styled from 'styled-components'

export const CardContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: space-between;
	gap: 0.75rem;

	padding: 1rem;
	width: 100%;

	background-color: var(--gray-500);
	border: 1px solid var(--gray-400);

	border-radius: 0.5rem;

	p {
		flex: 1;
		font-size: 0.875rem;

		&.selected {
			text-decoration: line-through;
			color: var(--gray-300);
		}
	}

	img:hover {
		fill: red;
	}
`

export const CheckBoxContainer = styled.label`
	display: inline-block;
	position: relative;
	padding-left: 35px;
	cursor: pointer;
	font-size: 12px;
	user-select: none;

	input {
		position: absolute;
		opacity: 0;
		cursor: pointer;

		&:checked ~ .checkmark {
			background-color: var(--purple-dark);
		}

		&:checked ~ .checkmark:after {
			display: block;
		}
	}

	.checkmark {
		position: absolute;
		top: 0;
		left: 0;
		height: 17.45px;
		width: 17.45px;
		background-color: transparent;
		border-radius: 50%;

		border: 2px solid var(--purple-dark);

		transition: 0.2s;

		&:after {
			content: '';
			position: absolute;
			display: none;
		}
	}

	.checkmark:after {
		left: 4px;
		top: 2px;
		width: 3px;
		height: 6px;
		border: solid white;
		border-width: 0 2px 2px 0;
		transform: rotate(45deg);
	}

	&:hover input ~ .checkmark {
		background-color: var(--purple);
		border-color: var(--purple);
	}
`
