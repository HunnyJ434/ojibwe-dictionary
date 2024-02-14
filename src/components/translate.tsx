/* eslint-disable @next/next/no-img-element */

import { useState } from 'react';
import axios from 'axios';
import Image from "next/image";
import interSwitchIcon from "../../public/interswtich.jpg"
import { postData } from "../pages/api/api"
import bg1 from '../../public/bg1.bmp'

const Translate = (props:any) => {
  const [inputString, setInputString] = useState<string>('');
  const [resultString, setResultString] = useState('');
  const [resultValue, setResultValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [toggle, setToggle] = useState(false)
  const handleClick = async () => {
    try {
      setIsLoading(true);
      const newData = await postData(inputString)
      setResultString(newData[0]);
      setResultValue(newData[1])
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false);
    }

  };
  
  return (
    <div className='w-[100%] h-[80vh] pl-[5%] py-[5%]'>
      <div className='flex w-[100%] md:pl-[25%]'>
        <p className='mx-[5rem]'>{toggle? "Ojibwe Text" : "English Text"}</p>
        <button onClick={() => {setToggle(!toggle)}}><img src={interSwitchIcon.src} alt="interswitch language Icon" className="w-[2.5rem] md:w-[2rem] md:h-[2rem]"></img></button>
        <p className='mx-[5rem]'>{toggle? "English Text" : "Ojibwe Text"}</p>
      </div>
      <div className='flex'>
      <input
        type="field"
        className='w-[38rem] font-bold h-[1 5rem] align-top pb-[15%] pl-[1%] m-3 bg-[transparent] rounded-md border-[1px] border-[orange]'
        value={inputString}
        onChange={(e) => setInputString(e.target.value)}
      />
      <div className='w-[38rem] h-[15rem] m-3 py-1 pl-[1%] rounded-md border-[1px] border-[orange]'>  <p>{resultString}</p><p>{resultValue}</p></div>
      
      </div>
      <div className='w-[100%] flex justify-end align-end px-[5%] mt-3'><button className='text-left border-[1px] px-3 w-[9.5rem] h-[3rem] border-[orange] hover:shadow-xl hover:translate-x-[-0.1rem] hover:translate-y-[-0.5rem] duration-700 transition-all]' onClick={() => handleClick()}>{isLoading?<div className='flex w-[100%]'> <svg aria-hidden="true" className="inline mr-3 w-6 h-6 text-white animate-spin dark:text-white fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg> <span className='mt-1 text-[0.8rem]'>Processing . . .</span> </div>: "Process Data" }</button></div>
    <Image 
    src={bg1.src}
    fill
    sizes="100vw"
	objectPosition="center"
    style={{
      objectFit: 'scale-down',
      zIndex: -1
    }}
	alt=""
  />	
    </div>
  );
};

export default Translate;
