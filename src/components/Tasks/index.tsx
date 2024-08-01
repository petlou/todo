import { Dispatch, SetStateAction, useEffect, useState } from 'react'

import { ITasks } from '../Body'
import { Cards } from '../Cards'
import { Empty } from '../Empty'

import { TasksContainer, HeaderContainer, TextContent } from './style'

interface TasksProps {
	tasks: ITasks[]
	changeTasks: Dispatch<SetStateAction<ITasks[]>>
}

export function Tasks({ tasks, changeTasks }: TasksProps) {
	const [concluded, setConcluded] = useState(0)

	useEffect(() => {
		const selectedItems = tasks.filter(task => task.isSelected)
		setConcluded(selectedItems.length)
	}, [tasks])

	function handleRemove(indexToRemove: number) {
		const newTasksArray = tasks.filter((_, index) => index !== indexToRemove)
		changeTasks(newTasksArray)
	}

	function handleSelect(indexToChange: number) {
		const newTasksArray = tasks.map((task, index) => {
			if (index === indexToChange) {
				return {
					...task,
					isSelected: !task.isSelected,
				}
			}

			return task
		})

		changeTasks(newTasksArray)
	}

	return (
		<TasksContainer>
			<HeaderContainer>
				<TextContent $inputColor='--blue'>
					Tarefas Criadas <span>{tasks.length}</span>
				</TextContent>
				<TextContent $inputColor='--purple'>
					Concluídas{' '}
					<span>
						{tasks.length > 0 ? `${concluded} de ${tasks.length}` : '0'}
					</span>
				</TextContent>
			</HeaderContainer>
			{tasks?.length > 0 ? (
				tasks.map((task, index) => (
					<Cards
						key={index}
						index={index}
						task={task}
						removeTask={handleRemove}
						selectTask={handleSelect}
					/>
				))
			) : (
				<Empty />
			)}
		</TasksContainer>
	)
}
