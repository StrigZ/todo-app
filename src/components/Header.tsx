import { useDispatch, useSelector } from 'react-redux'
import { selectTodoState, setActiveWindow } from '../store/todoSlice'

const Header = () => {
    const dispatch = useDispatch()
    const todoState = useSelector(selectTodoState)
    return (
        <>
            <h1 className='font-raleway font-bold text-4xl text-center text-[#333333] mb-[3.625rem]'>
                #todo
            </h1>
            <header className='font-montserrat font-semibold text-sm text-[#333333] border-b border-solid border-[#BDBDBD]'>
                <ul className='flex justify-evenly'>
                    <li
                        className={`min-w-[90px] text-center cursor-pointer relative pb-[18px] hover:text-[#2F80ED] after:h-[5px] after:bg-[#2F80ED] after:w-full after:absolute after:bottom-0 after:left-0 after:rounded-t-[4px]  ${
                            todoState.activePage === 'All' ? 'after:inline' : 'after:hidden'
                        }`}
                        onClick={() => dispatch(setActiveWindow('All'))}
                    >
                        All
                    </li>
                    <li
                        className={`min-w-[90px] text-center cursor-pointer relative pb-[18px] hover:text-[#2F80ED] after:h-[5px] after:bg-[#2F80ED] after:w-full after:absolute after:bottom-0 after:left-0 after:rounded-t-[4px] ${
                            todoState.activePage === 'Active' ? 'after:inline' : 'after:hidden'
                        }`}
                        onClick={() => dispatch(setActiveWindow('Active'))}
                    >
                        Active
                    </li>
                    <li
                        className={`min-w-[90px] text-center cursor-pointer relative pb-[18px] hover:text-[#2F80ED] after:h-[5px] after:bg-[#2F80ED] after:w-full after:absolute after:bottom-0 after:left-0 after:rounded-t-[4px] ${
                            todoState.activePage === 'Completed' ? 'after:inline' : 'after:hidden'
                        }`}
                        onClick={() => dispatch(setActiveWindow('Completed'))}
                    >
                        Completed
                    </li>
                </ul>
            </header>
        </>
    )
}
export default Header
