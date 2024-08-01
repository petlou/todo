import { EmptyContainer } from './style'

export function Empty() {
	return (
		<EmptyContainer>
			<img src='/clipboard.svg' alt='Clipboard' />
			<div>
				<h3>Você ainda não tem tarefas cadastradas</h3>
				<p>Crie tarefas e organize seus itens a fazer</p>
			</div>
		</EmptyContainer>
	)
}
