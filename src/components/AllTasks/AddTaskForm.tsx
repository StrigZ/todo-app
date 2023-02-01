import { FormEvent, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Todo } from '../../../typings'
import { addTask } from '../../store/todoSlice'

const AddTaskForm = () => {
    const userInputRef = useRef<HTMLInputElement>(null)
    const dispatch = useDispatch()
    const addTaskFormSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (userInputRef.current?.value) {
            const todoObject: Todo = {
                completed: false,
                text: userInputRef.current?.value,
                id: Math.random().toString().slice(2),
            }

            dispatch(addTask(todoObject))
            userInputRef.current.value = ''
        }
    }

    return (
        <form
            className='flex md:flex-row flex-col  items-center justify-between mt-[18px]'
            onSubmit={addTaskFormSubmitHandler}
        >
            <input
                className='w-full md:w-min flex-1 py-5 pl-3 placeholder:font-montserrat font-normal text-sm rounded-[12px] border border-solid border-[#BDBDBD] '
                type='text'
                placeholder='add details'
                ref={userInputRef}
            />
            <button
                className='w-full md:w-min bg-[#2F80ED] text-white font-montserrat font-semibold text-sm px-8 py-5 rounded-[12px] md:ml-[25px] mt-2 md:mt-0'
                type='submit'
            >
                Add
            </button>
        </form>
    )
}
export default AddTaskForm
