import React from 'react'
import {useForm} from 'react-hook-form'
//createactionfunction invoked by react component take it from slice
import {addToDo} from '../slices/todoSlice'
//to dispatch the action obj to redux store
import {useDispatch} from 'react-redux'
const AddToDo = () => {

  let {register,handleSubmit,reset}=useForm()
  let dispatch=useDispatch()


  const submitForm=(taskObj)=>{
    console.log(taskObj.task)
    //taskObj.preventDefault()
    let actionObj=addToDo(taskObj.task)
    console.log(actionObj)
    dispatch(actionObj)
    reset() 
  }

  return (
    <div>
      <p className='display-5 fw-semibold'>Add To DO</p>
      <div className='bg-black rounded m-2'>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className='container mx-auto'>
          <label htmlFor='addtask' className='form-label m-2' style={{color:"white"}} >Add task</label>
          <input type="text" {...register("task")} className='form-control border border-primary'></input>
        </div>
        <div className='text-center'>
        <button type='submit' className="btn btn-success  mx-auto my-5">Add task</button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default AddToDo
