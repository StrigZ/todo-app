import { configureStore } from '@reduxjs/toolkit'
import todoSliceReducer from './todoSlice'
import { listenerMiddleware } from './saveToStorageMiddleware'
// ...

const todoState = JSON.parse(localStorage.getItem('tasks') || 'null')

export const store = configureStore({
    preloadedState: {
        todo: todoState === null ? { todoList: [], activePage: 'All' } : todoState,
    },
    reducer: {
        todo: todoSliceReducer,
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        listenerMiddleware.middleware,
    ],
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
