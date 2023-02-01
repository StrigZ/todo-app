import { useSelector } from 'react-redux'
import AddTaskForm from './components/AllTasks/AddTaskForm'
import AllTasksList from './components/AllTasks/AllTasksList'
import Header from './components/Header'
import { selectTodoState } from './store/todoSlice'

function App() {
    const todoState = useSelector(selectTodoState)
    return (
        <>
            <Header />
            <main>
                {todoState.activePage === 'All' && <AddTaskForm />}
                <AllTasksList />
            </main>
        </>
    )
}

export default App
