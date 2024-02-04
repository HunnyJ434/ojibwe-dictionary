
import Image from 'next/image'
import { Inter } from 'next/font/google'
import  Content   from '../components/main-content'
import {db}  from "./api/firebase-config"
import {getDocs, addDoc, collection} from "firebase/firestore"
import { useState } from 'react'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })


  
  const Home = ({ data }:any) => {
  return (
    <main className={` flex min-h-screen flex-col items-center justify-between px-10`}>
      <Content EngOjib={data[0]} OjibEng={data[1]}/>
    </main>
  )
}

export const getStaticProps = async () => {
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
  const data = [
    EngOjib || {}, // Provide an empty object if EngOjib is null
    OjibEng || {}, // Provide an empty object if OjibEng is null
  ];
  // Return the data as props
  return {
    props: {
      data,
    },
  };
};

export default Home
