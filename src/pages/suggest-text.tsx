"use client";

import React, { useState } from "react";
import Image from "next/image";
import bg from '../../public/New Bitmap Image.png'
import {db}  from "./config/firebase-config"
import {doc, updateDoc, setDoc} from "firebase/firestore"


export default function Page() {
	
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
		try{
			await updateDoc(doc(db, "words", contentType), obj)
		}
		catch(err){
			console.error(err)
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
		<div className="flex"><h1 className="w-[28%] pb-1 text-[orange]  duration-1000 text-3xl ml-3 border-b-[3px] mr-[-2rem] border-[orange]">Suggest Tex</h1><h1 className="m-0 animate-bounce text-3xl text-[orange]">t</h1></div>
		<div className="mt-[4rem] pt-[5%]">
		<label htmlFor="contentType">Text Type:</label>
  		<select className="w-[10rem]" id="contentType" onChange={(e) => handleContentType(e.target.value)} name="contentType">
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
		<button className="rounded-md h-[2.5rem] w-[100%] bg-[#d3def0] hover:bg-[#b2ebc1] transition-all hover:translate-y-[-0.3rem] hover:shadow-lg duration-1000 border-b-[8px] border-b-[#e1e9f5]" onClick={() => handleSubmit()}>Submit</button>
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