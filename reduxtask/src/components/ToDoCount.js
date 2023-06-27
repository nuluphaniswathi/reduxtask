import React from 'react'
import { useSelector} from 'react-redux'
const ToDoCount = () => {
  let tododata=useSelector(state=>state.todolist)
  return (
    <div>
      <p className='display-5 fw-semibold'>ToDoCount</p>
      <p className='lead'>{tododata.length}</p>
    </div>
  )
}

export default ToDoCount