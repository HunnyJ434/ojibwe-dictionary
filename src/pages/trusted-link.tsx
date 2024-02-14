import Image from 'next/image'
import GetReviewData from "../components/get-review-data"
import LoginForm from "../components/login-form"
import {db}  from "./api/firebase-config"
import {doc, updateDoc , collection , getDocs} from "firebase/firestore"
import Link from 'next/link'
import burgerIcon from "../../public/hamburger.png"
import mainIcon from "../../public/mainIcon.png"
import { useState } from 'react'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
const getData =async (value:number) => {
    const wordCollectionRef = collection(db , "words")
   
    try{
     const data = await getDocs(wordCollectionRef)
     return data.docs[value].data() 
    }
    catch(err){
        console.error(err)
    }
      return {}
}

const Page =  ({ data }:any) => {
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
        <GetReviewData EngOjibReData={data[0]} OjibEngReData={data[1]} EngCorrection={data[2]} OjibCorrection={data[3]}/>
      </div>
    )

}

export const getServerSideProps = async () => {
    const mainDataEngObjibRe:any = await getData(1)
    const mainDataObjibEngRe:any = await getData(4)
    const EngOjibCorrection:any = await getData(7)
    const OjibEngCorrection:any = await getData(2)
    const data = [mainDataEngObjibRe,mainDataObjibEngRe,EngOjibCorrection, OjibEngCorrection]
  
    // Return the data as props
    return {
      props: {
        data,
      },
    };
  };

export default Page