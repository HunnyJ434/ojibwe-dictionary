/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import Image from 'next/image';
import interSwitchIcon from "../../public/interswtich.jpg"
import bg1 from '../../public/bg1.bmp';
import { postData } from '../pages/api/api';

const Translate = () => {
  const [inputString, setInputString] = useState('');
  const [resultString, setResultString] = useState('');
  const [resultValue, setResultValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [toggle, setToggle] = useState(false); // false = Ojibwe→English, true = English→Ojibwe

  const handleClick = async () => {
    try {
      setIsLoading(true);
      const newData:any = await postData(inputString);
      setResultString(newData[0]);
      setResultValue(newData[1]);
    } catch (error) {
      console.error('Translation failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative w-full h-[80vh] pl-[5%] py-[5%]">
      <div className="flex w-full justify-center space-x-20 mb-4">
        <p>{toggle ? 'English Text' : 'Ojibwe Text'}</p>
        <button onClick={() => setToggle(!toggle)}>
          <img
            src={interSwitchIcon.src}
            alt="Switch Language"
            className="w-10 h-10 md:w-8 md:h-8"
          />
        </button>
        <p>{toggle ? 'Ojibwe Text' : 'English Text'}</p>
      </div>

      <div className="flex flex-col md:flex-row">
        <textarea
          className="w-full md:w-[38rem] h-[15rem] m-3 p-3 font-bold rounded-md border border-orange bg-transparent resize-none"
          placeholder="Enter text here..."
          value={inputString}
          onChange={(e) => setInputString(e.target.value)}
        />
        <div className="w-full md:w-[38rem] h-[15rem] m-3 p-3 rounded-md border border-orange bg-white overflow-auto">
          <p className="font-semibold">{resultString}</p>
          {resultValue && <p className="text-gray-500 mt-2 text-sm">Value: {resultValue}</p>}
        </div>
      </div>

      <div className="flex justify-end px-[5%] mt-3">
        <button
          onClick={handleClick}
          className="border border-orange px-4 py-2 w-40 h-12 hover:shadow-xl hover:translate-x-[-0.1rem] hover:translate-y-[-0.5rem] transition-all duration-700"
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <svg
                aria-hidden="true"
                className="inline mr-2 w-5 h-5 animate-spin text-white fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="..." fill="currentColor" />
                <path d="..." fill="currentFill" />
              </svg>
              <span>Processing...</span>
            </div>
          ) : (
            'Translate'
          )}
        </button>
      </div>

      <Image
        src={bg1.src}
        alt="Background"
        fill
        sizes="100vw"
        style={{ objectFit: 'scale-down', zIndex: -1 }}
      />
    </div>
  );
};

export default Translate;
