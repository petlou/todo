import { useState } from 'react'
import { Input } from '../Input'
import { Tasks } from '../Tasks'

import { Container } from './style'

export interface ITasks {
	name: string
	isSelected: boolean
}

export function Body() {
	const [tasks, setTasks] = useState<ITasks[]>([])

	function handleCreateTask(task: string) {
		if (!task) return

		setTasks(prev => [
			...prev,
			{
				name: task,
				isSelected: false,
			},
		])
	}

	return (
		<Container>
			<Input onSubmit={handleCreateTask} />
			<Tasks tasks={tasks} changeTasks={setTasks} />
		</Container>
	)
}
