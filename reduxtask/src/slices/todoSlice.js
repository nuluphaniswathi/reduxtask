import {createSlice} from '@reduxjs/toolkit';

export const todoSlice=createSlice({
    name:"todolist",
    initialState:[],
    reducers:{
        addToDo:(state,action)=>{
            state.push(action.payload)
        }, 
        deleteTask:(state,action)=>{
            state.splice(action.payload,1)

        } 
    }
})




//create action creator function
export const {addToDo,deleteTask}=todoSlice.actions 
//export all reducers as a single reducer obj
export default todoSlice.reducer 