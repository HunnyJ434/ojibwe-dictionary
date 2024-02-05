"use client";

import React, { useState } from "react";
import Image from "next/image";
import bg from '../../public/New Bitmap Image.png'
import {db}  from "./api/firebase-config"
import {doc, updateDoc, setDoc} from "firebase/firestore"


export default function Page() {
	const [isLoading, setIsLoading] = useState(false);	
	const [contentType, setContentType] = useState("Ojib-Eng-Review")
	const [contentText, setContentText] = useState("")
	const [translatedText, setTranslatedText] = useState("")
	const [isFormSub, setIsFormSub] = useState(false)
	const map1:any = new Map();
	map1.set(contentText, translatedText);
	const obj = Object.fromEntries(map1);

	const handleContentType = (value:string) => {
		setContentType(value)
	}
	const handleSubmit = async () => {
		try {
			setIsLoading(true);
			await updateDoc(doc(db, "words", contentType), obj)
		  } catch (error) {
			console.error(error)
		  } finally {
			setIsLoading(false);
		  }
		setIsFormSub(true)
		setContentText("")
		setTranslatedText("")
		setTimeout(() => {setIsFormSub(false)},5000)
	}
	return (
		<div  className=" h-[100vh]  w-full flex justify-center " style={{backgroundImage: bg.src}}>
		<div className="rounded-lg  w-[50%]  flex flex-col border-[1px] border-[black]">
		<div className={`border-[1px]  border-[black] rounded-lg ml-4 mt-2 transition-all duration-1000 ${isFormSub? "opacity-100" : "border-0 opacity-0 "}`}><h1 className={`${isFormSub? "" : "hidden "}`}>Thank you, your suggestion has been recorded.</h1></div>
		<div className="flex"><h1 className="w-[28%] pb-1 text-[orange]  duration-1000 text-3xl ml-3 border-b-[3px] mr-[-0.9rem] border-[orange]">Suggest Tex</h1><h1 className="m-0 animate-bounce text-3xl text-[orange]">t</h1></div>
		<div className="mt-[4rem] pt-[5%]">
		<label htmlFor="contentType">Text Type:</label>
  		<select className="w-[10.5rem]" id="contentType" onChange={(e) => handleContentType(e.target.value)} name="contentType">
    		<option value="Ojib-Eng-Review">Ojibwe to English</option>
    		<option value="Eng-Ojib-Review">English to Ojibwe</option>
		</select>
		</div>
		<div className="flex my-[4rem]">
		<label className="mt-1 mr-2" htmlFor="text">Text:</label>
		<input id="text" value={contentText} onChange={(e) => setContentText(e.target.value)} className="h-[2rem] inline" placeholder={`${contentType == "Ojib-Eng-Review"? "Ojibwe Text" : "English text"}`} type="field"></input>
		</div>
		<div className="flex mb-[4rem]">
		<label className="mt-1 mr-2" htmlFor="translated-text">Translation</label>
  		<input  id="text" value={translatedText} onChange={(e) => setTranslatedText(e.target.value)} className="h-[2rem] inline" placeholder={`${contentType == "Eng-Ojib-Review"? "Ojibwe" : "English"} Translation`} type="field"></input>
		</div>
		<button className="rounded-md h-[2.5rem] w-[100%] bg-[#d3def0] hover:bg-[#b2ebc1] transition-all hover:translate-y-[-0.3rem] hover:shadow-lg duration-1000 border-b-[8px] border-b-[#e1e9f5]" onClick={() => handleSubmit()}>{isLoading?<div className='flex justify-center w-[100%]'> <svg aria-hidden="true" className=" mr-3 w-6 h-6 text-white animate-spin dark:text-white fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg> <span className='text-[0.9rem]'>Processing . . .</span> </div>:<> Submit</>}</button>
		</div>
		<Image 
    src={bg.src}
    fill
    sizes="100vw"
	objectPosition="center"
    style={{
      objectFit: 'cover',
      zIndex: -1
    }}
	alt=""
  />	
		</div>
	)
  }