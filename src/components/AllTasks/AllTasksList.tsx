import { BsTrash } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import {
    changeTaskState,
    removeAllCompletedTasks,
    removeTask,
    selectTodoState,
} from '../../store/todoSlice'

const AllTasksList = () => {
    const todoState = useSelector(selectTodoState)
    const dispatch = useDispatch()

    let filteredList = todoState.todoList
    if (todoState.activePage === 'Active') {
        filteredList = filteredList.filter((task) => task.completed === false)
    } else if (todoState.activePage === 'Completed') {
        filteredList = filteredList.filter((task) => task.completed === true)
    }

    const changeStateHandler = (taskId: string) => {
        dispatch(changeTaskState(taskId))
    }

    return (
        <div className='pt-8 flex flex-col justify-center'>
            {filteredList.map(({ completed, id, text }) => {
                return (
                    <ul key={id} className='flex items-center select-none mb-6'>
                        <input
                            className='w-6 h-6'
                            type='checkbox'
                            checked={completed}
                            onChange={() => changeStateHandler(id)}
                        />
                        <li className={`ml-[7px] ${completed && 'line-through'}`}>{text}</li>
                        {completed && (
                            <BsTrash
                                className='ml-auto w-[18px] h-[22px] mr-3 hover:text-[#2F80ED] cursor-pointer'
                                onClick={() => dispatch(removeTask(id))}
                            />
                        )}
                    </ul>
                )
            })}
            {filteredList.length === 0 && todoState.activePage !== 'All' && (
                <p className='text-center font-montserrat font-bold'>
                    No {todoState.activePage.toLowerCase()} tasks!
                </p>
            )}
            {todoState.activePage === 'Completed' && filteredList.length !== 0 && (
                <button
                    className='flex items-center justify-center font-montserrat font font-semibold text-xs text-white bg-[#EB5757] rounded-[4px] py-3 pl-8 pr-6  ml-auto'
                    onClick={() => dispatch(removeAllCompletedTasks())}
                >
                    <BsTrash className='w-2 h-2 mr-[5px]' />
                    Delete All
                </button>
            )}
        </div>
    )
}
export default AllTasksList
