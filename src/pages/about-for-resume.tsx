import Link from 'next/link'
import burgerIcon from "../../public/hamburger.png"
import mainIcon from "../../public/mainIcon.png"
import Image from 'next/image'

const Page =  () => {

    return (
      
      <div>
                <div>
	<div className="hidden md:flex lg:flex xl:flex flex justify-between w-[100%] h-[3.8rem] bg-[orange]">
	<Link href="/"><Image src={mainIcon.src} alt="website Icon" width={50} height={25} className="ml-3 w-[2.5rem] h-[3.8rem]"></Image></Link>
		
		<div className={`h-[100%] flex justify-end`}>
			<Link href="/" className={` py-3 mx-3`}>Word Dictionary</Link>
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
        <Link href="/" className={` py-3 mx-3`}>Word Dictionary</Link>
		<Link href="/" className="py-3 mx-3">Sentences</Link>
		<Link href="/translate" className="py-3 mx-3">Translator</Link>
		<Link href="/suggest-text" className="py-3 mx-3">Suggest text</Link>
        </div>
      </div>
	</div>
</div> 
        <h1>Build by Hunny J. Please feel free to browse the website.</h1>
      </div>
    );
  }
  
  export default Page
