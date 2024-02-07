
import LoginForm from "./login-form"
import { useState } from "react"
import {db}  from "../pages/api/firebase-config"
import {doc, updateDoc, setDoc , deleteField} from "firebase/firestore"
import approveIcon from "../../public/approve.jpg"
import Image from "next/image"
const GetReviewData =  (props:any) => {
   const [isLoading, setIsLoading] = useState(false);
   const [isLoggedin, setLoggedin] = useState(false)
   const [hiddenKey, setHiddenKey] = useState<any>([])
   const OjibEngkeys = Object.keys(props.OjibEngReData).sort()
   const EngOjibkeys = Object.keys(props.EngOjibReData).sort()
   const EngCorrectkeys = Object.keys(props.EngCorrection).sort()
   const OjibCorrectkeys = Object.keys(props.OjibCorrection).sort()
    const approveWord = async (key:any, contentType:any,value:any) => {
        const map1:any = new Map();
        map1.set(key, value);
        const obj = Object.fromEntries(map1);
        
        try{
            setIsLoading(true)
            setLoggedin(true)
			await updateDoc(doc(db, "words", contentType), obj)
            setHiddenKey( [...hiddenKey, key])
		}
		catch(err){
			console.error(err)
		}finally {
            setIsLoading(false)
        }
        map1.set(key, deleteField());
        const obj1 = Object.fromEntries(map1);
        try{
            setIsLoading(true)
			await updateDoc(doc(db, "words", contentType + "-Review"), obj1)
		}
		catch(err){
			console.error(err)
		} finally {
            setIsLoading(false)
        }

    } 
    const disapproveWord = async (key:any, contentType:any,value:any) => {
        const map1:any = new Map();
        map1.set(key, deleteField());
        const obj1 = Object.fromEntries(map1);

        try{
            setIsLoading(true)
			await updateDoc(doc(db, "words", contentType + "-Review"), obj1)
            setHiddenKey( [...hiddenKey, key])
            console.log(hiddenKey)
        }
		catch(err){
			console.error(err)
		}finally {
            setIsLoading(false)
        }
    }
    return(
        isLoggedin?
        <><h1>New Suggestion</h1> {OjibEngkeys.map((item:any, key:any) => {
            return (<div key={key} className={hiddenKey.includes(item)? "hidden" : "ml-3 my-1 text-[1.15rem] flex"}><div key={key}>{item}: {props.OjibEngReData[item]}</div>
                    <button className="ml-[2rem]" key={key} onClick={() => approveWord(item, "Ojib-Eng",props.EngOjibReData[item])}>{isLoading?<div className='flex justify-center w-[100%]'> <svg aria-hidden="true" className=" mr-3 w-4 h-4 text-white animate-spin dark:text-white fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg> <span className='text-[0.7rem]'></span> </div>:<Image src={approveIcon.src} width={25} height={25} alt=""></Image>}</button>
                    <button  onClick={() => {disapproveWord(item, "Ojib-Eng",props.OjibEngReData[item])}} className="ml-[2rem] "><p className="text-[red] font-[red]">{isLoading?<div className='flex justify-center w-[100%]'> <svg aria-hidden="true" className=" mr-3 w-4 h-4 text-white animate-spin dark:text-white fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg> <span className='text-[0.7rem]'></span> </div>:<>X</>}</p></button>
                    </div>)
                    
        } )}
        {EngOjibkeys.map((item:any, key:any) => {
            return (<div key={key} className={hiddenKey.includes(item)? "hidden" : "ml-3 my-1 text-[1.15rem] flex"}>{item}: {props.OjibEngReData[item]}
                    <button className="ml-[2rem]" key={key} onClick={() => approveWord(item, "Eng-Ojib",props.EngOjibReData[item])}>{isLoading?<div className='flex justify-center w-[100%]'> <svg aria-hidden="true" className=" mr-3 w-4 h-4 text-white animate-spin dark:text-white fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg> <span className='text-[0.7rem]'></span> </div>:<Image src={approveIcon.src} width={25} height={25} alt=""></Image>}</button>
                    <button  onClick={() => {disapproveWord(item, "Eng-Ojib",props.EngOjibReData[item])}} className="ml-[2rem] "><p className="text-[red] font-[red]">{isLoading?<div className='flex justify-center w-[100%]'> <svg aria-hidden="true" className=" mr-3 w-4 h-4 text-white animate-spin dark:text-white fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg> <span className='text-[0.7rem]'></span> </div>:<>X</>}</p></button>
                    </div>)
        } )}
        <h1>Text Correction</h1>
        {EngCorrectkeys.map((item:any, key:any) => {
            return (<div key={key} className={hiddenKey.includes(item)? "hidden" : "ml-3 my-1 text-[1.15rem] flex"}>{item}: {props.EngCorrection[item]}
                    <button className="ml-[2rem]" key={key} onClick={() => approveWord(item, "Eng-Ojib",props.EngCorrection[item])}>{isLoading?<div className='flex justify-center w-[100%]'> <svg aria-hidden="true" className=" mr-3 w-4 h-4 text-white animate-spin dark:text-white fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg> <span className='text-[0.7rem]'></span> </div>:<Image src={approveIcon.src} width={25} height={25} alt=""></Image>}</button>
                    <button  onClick={() => {disapproveWord(item, "OjibEng-Correction",props.EngCorrection[item])}} className="ml-[2rem] "><p className="text-[red] font-[red]">{isLoading?<div className='flex justify-center w-[100%]'> <svg aria-hidden="true" className=" mr-3 w-4 h-4 text-white animate-spin dark:text-white fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg> <span className='text-[0.7rem]'></span> </div>:<>X</>}</p></button>
                    </div>)
        } )}
        {OjibCorrectkeys.map((item:any, key:any) => {
            return (<div key={key} className={hiddenKey.includes(item)? "hidden" : "ml-3 my-1 text-[1.15rem] flex"}>{item}: {props.OjibCorrection[item]}
                    <button className="ml-[2rem]" key={key} onClick={() => approveWord(item, "Ojib-Eng",props.OjibCorrection[item])}>{isLoading?<div className='flex justify-center w-[100%]'> <svg aria-hidden="true" className=" mr-3 w-4 h-4 text-white animate-spin dark:text-white fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg> <span className='text-[0.7rem]'></span> </div>:<Image src={approveIcon.src} width={25} height={25} alt=""></Image>}</button>
                    <button  onClick={() => {disapproveWord(item, "EngOjib-Correction",props.OjibCorrection[item])}} className="ml-[2rem]"><p className="text-[red] font-[red]">{isLoading?<div className='flex justify-center w-[100%]'> <svg aria-hidden="true" className=" mr-3 w-4 h-4 text-white animate-spin dark:text-white fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg> <span className='text-[0.7rem]'></span> </div>:<>X</>}</p></button>
                    </div>)
        } )}
        </>
        : <LoginForm isLoggedin={isLoggedin} setLoggedin={setLoggedin}/> 
    )
}

export default GetReviewData