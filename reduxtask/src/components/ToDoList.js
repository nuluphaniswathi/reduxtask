import React from 'react'
import { deleteTask } from '../slices/todoSlice'
import { useSelector,useDispatch } from 'react-redux'
const ToDoList = () => {
    let data=useSelector(state=>state.todolist)
    let dispatch=useDispatch()
    const deleteSelectedTask=(index)=>{
      let deleteActionObj=deleteTask(index);
      console.log(deleteActionObj)
      dispatch(deleteActionObj)
    }
  return (
    <div>
      <p className='display-5 fw-semibold'>ToDoList</p>
        <div>
            <div>{data.length===0?<p className='fs-5 lead'>Notasks</p>:<p></p>}</div>
            <div>
            {
            data.map((taskObj,index)=><div key={index}>
              <div className='text-center'>
                <p className='fw-light'>{taskObj}</p><button className='btn btn-warning ' onClick={()=>deleteSelectedTask(index)}>delete</button>
                
                </div>
                </div>)
            }
            </div>
        </div>

    </div>
  )
}

export default ToDoList