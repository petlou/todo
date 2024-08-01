import { useState } from 'react'
import { Input } from '../Input'
import { Tasks } from '../Tasks'

import { Container } from './style'

export function Body() {
	const [tasks, setTasks] = useState<string[]>([])

	function handleSubmit(task: string) {
		setTasks(prev => [...prev, task])
	}
	return (
		<Container>
			<Input onSubmit={handleSubmit} />
			<Tasks tasks={tasks} />
		</Container>
	)
}
