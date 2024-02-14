
import Image from 'next/image'

import  Content   from '../components/main-content'
import {db}  from "./api/firebase-config"
import {getDocs, addDoc, collection} from "firebase/firestore"
import { useState } from 'react'
import { useEffect } from 'react'
import Link from 'next/link'
import burgerIcon from "../../public/hamburger.png"
import mainIcon from "../../public/mainIcon.png"

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })


  
  const Home = ({ data }:any) => {
    const [toggle, setToggle] = useState(true)
    const handleClick = () => {
        setToggle(!toggle)
    }
  return (
    <div>
       <div className={`${inter.className} `}>
	<div className="hidden md:flex lg:flex xl:flex flex justify-between w-[100%] h-[3.8rem] bg-[orange]">
	<Link href="/"><Image src={mainIcon.src} alt="website Icon" width={50} height={25} className="ml-3 w-[2.5rem] h-[3.8rem]"></Image></Link>
		
		<div className={`${inter.className} h-[100%] flex justify-end`}>
			<Link href="/" className={`${inter.className} py-3 mx-3`}>Word Dictionary</Link>
			<Link href="/" className="py-3 mx-3">Sentences</Link>
			<Link href="/translate" className="py-3 mx-3">Translator</Link>
			<Link href="/suggest-text" className="py-3 mx-3">Suggest text</Link>
		</div>
		</div>
		<div className="md:hidden ">
    <div className="flex justify-between w-[100%] h-[3.8rem] bg-[orange]">
        <Link href="/"><Image src={mainIcon.src} alt="website Icon" width={50} height={25} className="ml-3 w-[2.5rem] h-[3.8rem]"></Image></Link>
      
        <button  className={`${toggle? 'block': "hidden"} rounded-lg w-[2.5rem] h-[2rem] mr-3 mt-3`} onClick={() => setToggle(!toggle)}><Image src={burgerIcon.src} onClick={() => setToggle(!toggle)} alt="website Icon" width={50} height={25} className=" w-[2.5rem] rounded-lg h-[2.5rem]"></Image></button>
        <div className={`${toggle? 'hidden' : "ml-[-12rem] block"} z-[100] flex flex-col w-[10rem] rounded-lg h-[16rem] bg-[orange]`}>
        <button  className='w-[2.5rem] mt-3 rounded-lg  h-[2rem] ml-[67.5%]' onClick={() => setToggle(!toggle)}><Image src={burgerIcon.src} onClick={() => setToggle(!toggle)} alt="website Icon" width={50} height={25} className=" w-[2.5rem] rounded-lg h-[2.5rem]"></Image></button>
        <Link href="/" className={`${inter.className} py-3 mx-3`}>Word Dictionary</Link>
		<Link href="/" className="py-3 mx-3">Sentences</Link>
		<Link href="/translate" className="py-3 mx-3">Translator</Link>
		<Link href="/suggest-text" className="py-3 mx-3">Suggest text</Link>
        </div>
      </div>
	</div>
</div> 
    <main className={` flex min-h-screen flex-col items-center justify-between px-10`} >
      
      <Content EngOjib={data[0]} OjibEng={{...data[1],...data[2],...data[3]}}/>
    
    </main>
    </div>
  )
}

export const getServerSideProps = async () => {
  const getData =async (value:number) => {
    try {
      const wordCollectionRef = collection(db, "words");
      const data = await getDocs(wordCollectionRef);
      return data.docs[value].data();
    } catch (err) {
      console.error(err);
      return null; // Return null in case of an error
    }
  };
  const EngOjib = await getData(0) 
  const OjibEng = await getData(3)
  const OjibEng1 = await getData(5)
  const OjibEng2 = await getData(6)
  const data = [
    EngOjib || {}, // Provide an empty object if EngOjib is null
    OjibEng || {}, // Provide an empty object if OjibEng is null
    OjibEng1 || {},
    OjibEng2 || {},
  ];
  // Return the data as props
  return {
    props: {
      data,
    },
  };
};

export default Home
