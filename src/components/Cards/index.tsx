import { ITasks } from '../Body'
import { TrashIcon } from '../Trash'

import { CardContainer, CheckBoxContainer } from './style'

interface CardsProps {
	index: number
	task: ITasks
	removeTask: (index: number) => void
	selectTask: (index: number) => void
}

export function Cards({ index, task, removeTask, selectTask }: CardsProps) {
	return (
		<CardContainer>
			<CheckBoxContainer>
				<input type='checkbox' onChange={() => selectTask(index)} />
				<span className='checkmark'></span>
				<p className={task.isSelected ? 'selected' : ''}>{task.name}</p>
			</CheckBoxContainer>
			<TrashIcon onClick={() => removeTask(index)} />
		</CardContainer>
	)
}
