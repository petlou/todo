import { TrashIcon } from '../Trash'

import { CardContainer, CheckBoxContainer } from './style'

interface CardsProps {
	task: string
}

export function Cards({ task }: CardsProps) {
	return (
		<CardContainer>
			<CheckBoxContainer>
				<input type='checkbox' />
				<span className='checkmark'></span>
				<p>{task}</p>
			</CheckBoxContainer>
			<TrashIcon onClick={() => console.log('Click => ', task)} />
		</CardContainer>
	)
}
