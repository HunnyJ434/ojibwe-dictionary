
import Image from 'next/image'
import {db}  from "../config/firebase-config"
import {doc ,updateDoc,  collection} from "firebase/firestore"
import { useEffect, useState } from 'react'
    

  
const SuggestCorrect = (props:any) => {
  const [newValue, setNewValue] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
    const handleSubmit = async () => {
    const map1:any = new Map();
    map1.set(props.valueKey, newValue);
    const obj = Object.fromEntries(map1);
    await updateDoc(doc(db, "words", props.type + "-Correction-Review"), obj)
    setIsSubmitted(true)
    setTimeout(()=>{
      props.setTrigger(false)
      setIsSubmitted(false)
    }, 3000)
  }
  return props.trigger ? ( 
    <div className='z-50  fixed flex justify-center items-center w-[100%] h-[100vh] top-0 left-0 bg-[rgba(0,0,0,0.5)]'>
    <div className='w-[60%] rounded-lg h-[60%] bg-[rgba(255,255,255,0.9)]'>

    <div className='flex w-[100%] justify-end'>
    <button
          onClick={() => props.setTrigger(false)}
          className={`w-[5rem] align-left h-[5rem] font-[black] text-[black]`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        </div>
        {isSubmitted? <div className='w-[100%] h-[60%] flex justify-center items-center'><h1>Thank you, your suggestion have been submitted for review.</h1></div> :
    <>
        <h1 className='text-[1.8rem] mx-3'>{props.valueKey}</h1>
        <p className='my-3 mx-3'>{props.value}</p>
        <input type='field' placeholder='Suggest new value' className='block px-3 w-[80%] h-[5rem] mx-3 rounded-lg mb-3 bg-[rgba(255,255,255)]' onChange={(e) => setNewValue(e.target.value)}/>
        <div className='w-[96%] mt-[3rem]  flex justify-end'><button className='w-[8rem] rounded-lg h-[4rem] bg-[orange] hover:shadow-xl hover:translate-x-[-0.1rem] hover:translate-y-[-0.5rem] duration-700 transition-all' onClick={() => handleSubmit()}>Submit Correction</button></div> </>}
        </div>
    </div>
  ): (<></>)
}


export default SuggestCorrect
