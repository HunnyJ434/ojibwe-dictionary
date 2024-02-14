"use client"
import { useState } from "react"
const LoginForm = (props:any) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = () => {
        if(username === "ojibwe" && password === "everychildmatter"){
            props.setLoggedin(true)
        }
    }
    return (
        
    <div className="w-screen h-screen flex justify-center items-center">
    
    <div className="w-[80%] h-[40%] md:w-[50%] lg:w-[30%] md:h-[25%] border-[1px] border-[black] p-4 rounded-lg">
        <div className="flex">
            <label className="mr-3" htmlFor="username" >User Name: </label>
            <input id="username" type="field" onChange={(e) => setUsername(e.target.value)}></input>
        </div>
        <div className="flex">
            <label className="mr-[1.35rem]" htmlFor="password">Password: </label>
            <input id="password" type="password" onChange={(e) => setPassword(e.target.value)}></input>
        </div>
        <button className="mt-3" onClick={() => handleSubmit()}>Submit</button>
    </div>
    </div>      
    )
}
export default LoginForm