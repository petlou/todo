import { Input } from '../Input'
import { Tasks } from '../Tasks'
import { Container } from './style'

export function Body() {
	function handleSubmit(task: string) {
		console.log('Task: ', task)
	}
	return (
		<Container>
			<Input onSubmit={handleSubmit} />
			<Tasks />
		</Container>
	)
}
