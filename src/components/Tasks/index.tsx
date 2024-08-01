import { Cards } from '../Cards'
import { Empty } from '../Empty'

import { TasksContainer, HeaderContainer, TextContent } from './style'

interface TasksProps {
	tasks: string[]
}

export function Tasks({ tasks }: TasksProps) {
	return (
		<TasksContainer>
			<HeaderContainer>
				<TextContent $inputColor='--blue'>
					Tarefas Criadas <span>0</span>
				</TextContent>
				<TextContent $inputColor='--purple'>
					Concluídas <span>0</span>
				</TextContent>
			</HeaderContainer>
			{tasks?.length > 0 ? (
				tasks.map((task, index) => <Cards key={index} task={task} />)
			) : (
				<Empty />
			)}
		</TasksContainer>
	)
}
