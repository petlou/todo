import { useState, FormEvent } from 'react'

import { InputContainer } from './style'

interface InputProps {
	onSubmit: (task: string) => void
}

export function Input({ onSubmit }: InputProps) {
	const [task, setTask] = useState('')

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault()

		onSubmit(task)
		setTask('')
	}

	return (
		<InputContainer onSubmit={handleSubmit}>
			<input
				name='task'
				type='text'
				autoFocus
				placeholder='Adicione uma nova tarefa'
				value={task}
				onChange={e => setTask(e.target.value)}
			/>
			<button type='submit'>
				Criar <img src='/plus.svg' alt='Criar' />
			</button>
		</InputContainer>
	)
}
