
import LoginForm from "./login-form"
import { useState } from "react"
import {db}  from "../pages/api/firebase-config"
import {doc, updateDoc, setDoc , deleteField} from "firebase/firestore"
import approveIcon from "../../public/approve.jpg"
import Image from "next/image"
const GetReviewData =  (props:any) => {
    
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
			await updateDoc(doc(db, "words", contentType), obj)
            setHiddenKey( [...hiddenKey, key])
		}
		catch(err){
			console.error(err)
		}
        map1.set(key, deleteField());
        const obj1 = Object.fromEntries(map1);
        try{
			await updateDoc(doc(db, "words", contentType + "-Review"), obj1)
		}
		catch(err){
			console.error(err)
		}
    } 
    const disapproveWord = async (key:any, contentType:any,value:any) => {
        const map1:any = new Map();
        map1.set(key, deleteField());
        const obj1 = Object.fromEntries(map1);
        console.log(obj1)
        console.log(contentType + "-Review")
        try{
			await updateDoc(doc(db, "words", contentType + "-Review"), obj1)
            setHiddenKey( [...hiddenKey, key])
            console.log(hiddenKey)
        }
		catch(err){
			console.error(err)
		}
    }
    return(
        isLoggedin?
        <><h1>New Suggestion</h1> {OjibEngkeys.map((item:any, key:any) => {
            return (<div key={key} className={hiddenKey.includes(item)? "hidden" : "ml-3 my-1 text-[1.15rem] flex"}><div key={key}>{item}: {props.OjibEngReData[item]}</div>
                    <button className="ml-[2rem]" key={key} onClick={() => approveWord(item, "Eng-Ojib",props.EngOjibReData[item])}><Image src={approveIcon.src} width={25} height={25} alt=""></Image></button>
                    <button  onClick={() => {disapproveWord(item, "Eng-Ojib",props.OjibEngReData[item])}} className="ml-[2rem] "><p className="text-[red] font-[red]">X</p></button>
                    </div>)
                    
        } )}
        {EngOjibkeys.map((item:any, key:any) => {
            return (<div key={key} className={hiddenKey.includes(item)? "hidden" : "ml-3 my-1 text-[1.15rem] flex"}>{item}: {props.OjibEngReData[item]}
                    <button className="ml-[2rem]" key={key} onClick={() => approveWord(item, "Ojib-Eng",props.EngOjibReData[item])}><Image src={approveIcon.src} width={25} height={25} alt=""></Image></button>
                    <button  onClick={() => {disapproveWord(item, "Ojib-Eng",props.EngOjibReData[item])}} className="ml-[2rem] "><p className="text-[red] font-[red]">X</p></button>
                    </div>)
        } )}
        <h1>Text Correction</h1>
        {EngCorrectkeys.map((item:any, key:any) => {
            return (<div key={key} className={hiddenKey.includes(item)? "hidden" : "ml-3 my-1 text-[1.15rem] flex"}>{item}: {props.EngCorrection[item]}
                    <button className="ml-[2rem]" key={key} onClick={() => approveWord(item, "Ojib-Eng",props.EngCorrection[item])}><Image src={approveIcon.src} width={25} height={25} alt=""></Image></button>
                    <button  onClick={() => {disapproveWord(item, "OjibEng-Correction",props.EngCorrection[item])}} className="ml-[2rem] "><p className="text-[red] font-[red]">X</p></button>
                    </div>)
        } )}
        {OjibCorrectkeys.map((item:any, key:any) => {
            return (<div key={key} className={hiddenKey.includes(item)? "hidden" : "ml-3 my-1 text-[1.15rem] flex"}>{item}: {props.OjibCorrection[item]}
                    <button className="ml-[2rem]" key={key} onClick={() => approveWord(item, "Eng-Ojib",props.OjibCorrection[item])}><Image src={approveIcon.src} width={25} height={25} alt=""></Image></button>
                    <button  onClick={() => {disapproveWord(item, "EngOjib-Correction",props.OjibCorrection[item])}} className="ml-[2rem] "><p className="text-[red] font-[red]">X</p></button>
                    </div>)
        } )}
        </>
        : <LoginForm isLoggedin={isLoggedin} setLoggedin={setLoggedin}/> 
    )
}

export default GetReviewData