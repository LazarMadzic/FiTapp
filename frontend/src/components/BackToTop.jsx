import React from 'react'
import {useState,useEffect} from "react"
import * as AiIcons from 'react-icons/ai';
import '../index.css';


function BackToTop() {
    const [backToTopButton, setBTTButton] = useState(false);

    useEffect(() =>{
        window.addEventListener('scroll',()=>{
            
            if(window.scrollY>200){
                setBTTButton(true);

            }else{
                setBTTButton(false);
            }
        })

    },[])

    const scrollUp=() =>{
        window.scrollTo({
            top:0,
            behavior:"smooth",

        })


    }

  return (
      <>
        {backToTopButton ? (
            <AiIcons.AiOutlineArrowUp className='top-btn' onClick={scrollUp}/>

        ) : (<>
        
        </>)}
           
               
             

            
           


           
            
            
           
      </>
  )
}

export default BackToTop