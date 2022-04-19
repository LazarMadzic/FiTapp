import React, { useState ,useEffect,useRef} from 'react';

import { useDispatch } from 'react-redux'
import { deleteWorkout,updateWorkout } from '../features/workouts/workoutSlice'
import { AiFillCaretDown,AiFillEdit,AiOutlineCloseCircle } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";

function WorkoutItem({workout}) {
    const dispatch = useDispatch()
    const [text, setText] = useState('')

    const[edit,isEdit]=useState(false)

   const showWoInput = ()=> isEdit(!edit)


 
function openInput(id){
    if(text!==''){
    
        if(edit){
            
            dispatch(updateWorkout({id:workout._id,text } ))
        setText('')
    
        }else{
    
    
    
        }
    }   
    
    showWoInput()

}

return (
    <div className="workout">
        <div>{new Date(workout.createdAt).toLocaleString('en-GB')}</div>

       {edit ?(
           <>
           
         <input
         type='text'
         name='text'
         id='text'
         value={text}
         onChange={(e) => setText(e.target.value)}
         className='workout-input'
       />  
       
        </>
       ):(

        <h2>{workout.text}</h2>
       )} 
     
      <button onClick={() => dispatch(deleteWorkout(workout._id))} className='close'>
      <AiOutlineCloseCircle/>
      </button>

      <button className='add' >
        <IoIosAddCircleOutline />

      </button>

      <button className='edit' onClick={openInput} >
        <AiFillEdit />

      </button>

      <button className='down'>
        <AiFillCaretDown />

      </button>
    </div>
  )
}

export default WorkoutItem