import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit'
import {
    addTask,
    removeTask,
    setActiveWindow,
    changeTaskState,
    removeAllCompletedTasks,
} from './todoSlice'
import type { RootState } from './store'

export const listenerMiddleware = createListenerMiddleware()
listenerMiddleware.startListening({
    matcher: isAnyOf(
        addTask,
        removeTask,
        setActiveWindow,
        changeTaskState,
        removeAllCompletedTasks,
    ),
    effect: (action, listenerApi) =>
        localStorage.setItem('tasks', JSON.stringify((listenerApi.getState() as RootState).todo)),
})
