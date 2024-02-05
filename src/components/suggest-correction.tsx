
import Image from 'next/image'
import {db}  from "../pages/api/firebase-config"
import {doc ,updateDoc,  collection} from "firebase/firestore"
import { useEffect, useState } from 'react'
    

  
const SuggestCorrect = (props:any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [newValue, setNewValue] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
    const handleSubmit = async () => {
    const map1:any = new Map();
    map1.set(props.valueKey, newValue);
    const obj = Object.fromEntries(map1);
    try {
			setIsLoading(true);
			await updateDoc(doc(db, "words", props.type + "-Correction-Review"), obj)
		  } catch (error) {
			console.error(error)
		  } finally {
			setIsLoading(false);
      setIsSubmitted(true)
      setTimeout(()=>{
        props.setTrigger(false)
        setIsSubmitted(false)
      }, 3000)
		  }
    

  }
  return props.trigger ? ( 
    <div className='z-50 fixed flex justify-center items-center w-[100%] h-[100vh] top-0 left-0 bg-[rgba(0,0,0,0.5)]'>
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
        <div className='w-[96%] flex justify-end mb-[1rem]'><button className='w-[8rem] rounded-lg h-[4rem] bg-[orange] hover:shadow-xl hover:translate-x-[-0.1rem] hover:translate-y-[-0.5rem] duration-700 transition-all' onClick={() => handleSubmit()}>{isLoading?<div className='flex justify-center w-[100%]'> <svg aria-hidden="true" className=" mr-3 w-4 h-4 text-white animate-spin dark:text-white fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg> <span className='text-[0.7rem]'>Processing . . .</span> </div>:<>Submit Correction</>}</button></div> </>}
        </div>
    </div>
  ): (<></>)
}


export default SuggestCorrect
