import { Empty } from '../Empty'
import { TasksContainer, HeaderContainer, TextContent } from './style'

export function Tasks() {
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
			<Empty />
		</TasksContainer>
	)
}
