import { useEffect, useState } from 'react';
import axios from 'axios';
import Translate from '../components/translate';
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
const Page =  () => {

  console.log(inter.className)
  

  return (
    
    <div>
      <Translate/>
    </div>
  );
}

export default Page