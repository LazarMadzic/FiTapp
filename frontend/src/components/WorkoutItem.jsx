import React, { useState ,useEffect,useRef} from 'react';
import './WorkoutItem.css'
import {useDispatch, useSelector} from 'react-redux'
import { deleteWorkout,updateWorkout } from '../features/workouts/workoutSlice'
import { AiFillCaretDown,AiFillEdit,AiOutlineCloseCircle } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoCardOutline } from 'react-icons/io5';
import Spinner from './Spinner';
import { createCardio } from '../features/exercise/exerciseC/cardioSlice';

function WorkoutItem({workout}) {
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )


    const dispatch = useDispatch()
    const [text, setText] = useState('')
    const [text_ex, setTextEx] = useState('')
    const [sets,setSets] =useState('')
    const [reps,setReps] =useState('')
    const [weight,setWeight] =useState('')
    const [distance,setDistance] =useState('')
    const [duration,setDuration] =useState('')
    const [pace,setPace] =useState('')

    const[edit,isEdit]=useState(false)
    const[addExercise,isExercise]=useState(false)
    const[cardioorstrenght,isCardio]=useState(true)

  const showWoInput = ()=> isEdit(!edit)
  const showCreateExerciseMenu =()=>isExercise(!addExercise) 


function openCreateExercise(id){

  showCreateExerciseMenu()
}
 
function chooseExerciseTypeC(){
  if(!cardioorstrenght){
    isCardio(true);


  }  
}

function chooseExerciseTypeS(){
  if(cardioorstrenght){
    isCardio(false);

  }


}

function createEx(userwoid){
  //console.log(id)
  if(!cardioorstrenght){
    dispatch(createCardio({userwoid,text_ex,distance,duration,pace}))
    //setPace('')
   // setDistance('')
   // setDuration('')
   // setTextEx('')
  }else{

  }

}

function openInput(id){
    if(text!==''){
    
        if(edit){
            
            dispatch(updateWorkout({id:workout._id,text } ))
        
        
        
        window.location.reload(false);
        setText('')
    
        }else{
    
    
          
        }
    }   
    
    showWoInput()
    
}

if (isLoading) {
  return <Spinner />
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

        {addExercise?(
        <>
        <div className='exercise-form'>

          <div className="btn-exrcise">
            <button className={cardioorstrenght ? "btn-ex active" : "btn-ex" } onClick={chooseExerciseTypeC} >
            <p>Strenght</p>
            </button>
            <button className={!cardioorstrenght ? "btn-ex active" : "btn-ex " }  onClick={chooseExerciseTypeS}>
            <p>Cardio</p>
            </button>

          </div>
        
        {!cardioorstrenght ?(
          <>
            <input
         type='text'
         name='text1'
         id='text1'
         value={text_ex}
         onChange={(e) => setTextEx(e.target.value)}
         placeholder='Exercise name'
         className='workout-input'
       /> 
         <input
         type='text'
         name='text2'
         id='text2'
         value={distance}
         onChange={(e) => setDistance(e.target.value)}
         placeholder='Distance'
         className='workout-input'
       /> 

          <input
         type='text'
         name='text3'
         id='text3'
         value={duration}
         onChange={(e) => setDuration(e.target.value)}
         placeholder='Duration(Minutes)'
         className='workout-input'
       /> 
         <input
         type='text'
         name='text4'
         id='text4'
         value={pace}
         onChange={(e) => setPace(e.target.value)}
         placeholder='Pace'
         className='workout-input'
       /> 
          </>

        ):(
          <>
            <input
         type='text'
         name='text'
         id='text1'
         value={text}
         onChange={(e) => setText(e.target.value)}
         placeholder='Exercise name'
         className='workout-input'
       /> 
         <input
         type='text'
         name='text'
         id='text2'
         value={sets}
         onChange={(e) => setSets(e.target.value)}
         placeholder='Sets'
         className='workout-input'
       /> 

          <input
         type='text'
         name='text'
         id='text3'
         value={reps}
         onChange={(e) => setReps(e.target.value)}
         placeholder='Reps'
         className='workout-input'
       /> 
         <input
         type='text'
         name='text'
         id='text4'
         value={weight}
         onChange={(e) => setWeight(e.target.value)}
         placeholder='Weight'
         className='workout-input'
       /> 
        </>


        )}

      
        
        <button className="btn-ex-add" value={workout._id}  onClick={(e) =>createEx(workout._id)} type='submit'>
            <p>Add Exercise</p>
        </button>
        </div>
        </>):(<></>)





        }



      <button onClick={() => dispatch(deleteWorkout(workout._id))} className='close'>
      <AiOutlineCloseCircle/>
      </button>

      <button className='add'  onClick={openCreateExercise}>
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