import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { Todo } from '../../typings'
// Define a type for the slice state

interface CounterState {
    todoList: Todo[]
    activePage: 'All' | 'Active' | 'Completed'
}

const initialState: CounterState = {
    todoList: [],
    activePage: 'All',
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        changeTaskState(state, action: PayloadAction<string>) {
            const currentTaskIndex = state.todoList.findIndex((task) => task.id === action.payload)
            state.todoList[currentTaskIndex].completed = !state.todoList[currentTaskIndex].completed
        },
        addTask(state, action: PayloadAction<Todo>) {
            state.todoList.push(action.payload)
        },
        removeTask(state, action: PayloadAction<string>) {
            state.todoList = state.todoList.filter((task) => task.id !== action.payload)
        },
        removeAllCompletedTasks(state) {
            state.todoList = state.todoList.filter((task) => task.completed !== true)
        },
        setActiveWindow(state, action: PayloadAction<'All' | 'Active' | 'Completed'>) {
            state.activePage = action.payload
        },
    },
})

export const { addTask, removeTask, setActiveWindow, changeTaskState, removeAllCompletedTasks } =
    todoSlice.actions

export const selectTodoState = (state: RootState) => state.todo

export default todoSlice.reducer
