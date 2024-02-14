/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import burgerIcon from "../../public/hamburger.png"
import Image from "next/image";
import mainIcon from "../../public/mainIcon.png"
import { useState } from 'react';
function NavBurger(props:any) {
  
    const [toggle, setToggle] = useState(true)
    const handleClick = () => {
        setToggle(!toggle)
    }
    return  (
      <div className="flex justify-between w-[100%] h-[3.8rem] bg-[orange]">
        <Link href="/"><Image src={mainIcon.src} alt="website Icon" width={50} height={25} className="ml-3 w-[2.5rem] h-[3.8rem]"></Image></Link>

        <button  className='w-[2.5rem] h-[2rem] mr-3 mt-3' onClick={() => console.log("fawfawf")}><Image src={burgerIcon.src} onClick={() => console.log("fawfawf")} alt="website Icon" width={50} height={25} className=" w-[2.5rem] h-[2.5rem]"></Image></button>
        <div className={`${toggle? 'hidden' : "block"} flex flex-col`}>
        <Link href="/" className={`${inter.className} py-3 mx-3`}>Word Dictionary</Link>
		<Link href="/" className="py-3 mx-3">Sentences</Link>
		<Link href="/translate" className="py-3 mx-3">Translator</Link>
		<Link href="/suggest-text" className="py-3 mx-3">Suggest text</Link>
        </div>
      </div>
    )
  }
  
  export default NavBurger;
  