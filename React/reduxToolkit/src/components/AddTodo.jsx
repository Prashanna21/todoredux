import React, { useEffect, useRef, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addTodo, removeTodo, updateTodo , toggleEditOff} from '../features/todo/todoSlice'

const AddTodo = () => {
    const [input,setInput] = useState('')
    const dispatch = useDispatch()
    const inputRef = useRef()
    const [placeholder, setPlaceholder] = useState('Add Todo')

    const editStatus = useSelector(state => state.editing)
    const editId = useSelector(state => state.editingId)

    const addTodoHandler = (e) => {
      e.preventDefault()
      if(editStatus){
        dispatch(updateTodo({id: editId, msg: input}))
        dispatch(toggleEditOff())
      }

      else{
        
        dispatch(addTodo(input))
      }
        setInput('')
    }

    useEffect(() => {
      if(editStatus){
        inputRef.current.focus()
        setPlaceholder("Edit Todo")
      }
      else{
        setPlaceholder("Add Todo")
      }
    }, [editStatus])




    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
          <input
            ref={inputRef}
            type="text"
            className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Enter a Todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)
            
            }
          />
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            {placeholder}
          </button>
        </form>
      )
    }
    

export default AddTodo