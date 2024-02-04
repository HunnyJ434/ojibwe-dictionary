/* eslint-disable @next/next/no-img-element */

import { useState } from 'react';
import axios from 'axios';
import Image from "next/image";
import interSwitchIcon from "../../public/interswtich.jpg"
import { postData } from "../pages/api/api"


const Translate = (props:any) => {
  const [inputString, setInputString] = useState<string>('');
  const [resultString, setResultString] = useState('');
  const [resultValue, setResultValue] = useState('');
  const [toggle, setToggle] = useState(false)
  const handleClick = async () => {
    const newData = await postData(inputString)
    setResultString(newData[0]);
    setResultValue(newData[1])
  };
  
  return (
    <div className='w-[100%] h-[80vh] pl-[5%] py-[5%]'>
      <div className='flex w-[100%] pl-[25%]'>
        <p className='mx-[5rem]'>{toggle? "Ojibwe Text" : "English Text"}</p>
        <button onClick={() => {setToggle(!toggle)}}><img src={interSwitchIcon.src} alt="interswitch language Icon" className=" w-[2rem] h-[2rem]"></img></button>
        <p className='mx-[5rem]'>{toggle? "English Text" : "Ojibwe Text"}</p>
      </div>
      <div className='flex'>
      <input
        type="field"
        className='w-[38rem] h-[1 5rem] align-top pb-[15%] pl-[1%] m-3 rounded-md border-[1px] border-[orange]'
        value={inputString}
        onChange={(e) => setInputString(e.target.value)}
      />
      <div className='w-[38rem] h-[15rem] m-3 py-1 pl-[1%] rounded-md border-[1px] border-[orange]'>  <p>{resultString}</p><p>{resultValue}</p></div>
      
      </div>
      <div className='w-[100%] flex justify-end align-end px-[5%] mt-3'><button className='text-left border-[1px] px-3 w-[9rem] h-[3rem] border-[orange] hover:shadow-xl hover:translate-x-[-0.1rem] hover:translate-y-[-0.5rem] duration-700 transition-all]' onClick={() => handleClick()}>Process Data</button></div>
    </div>
  );
};

export default Translate;
