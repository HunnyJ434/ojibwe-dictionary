/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
"use client";

import React, { useState,  useLayoutEffect, useEffect } from "react";
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Image from "next/image";
import mainIcon from "../../public/mainIcon.png"
import NavBurger from "./nav-burgger"
const inter = Inter({ subsets: ['latin'] })





const Navbar = () => {
	
 
  
    return (
 <div className={`${inter.className} `}>
	<div className="hidden md:flex lg:flex xl:flex flex justify-between w-[100%] h-[3.8rem] bg-[orange]">
	<Link href="/"><Image src={mainIcon.src} alt="website Icon" width={50} height={25} className="ml-3 w-[2.5rem] h-[3.8rem]"></Image></Link>
		<button className="w-[3rem] h-[3rem] bg-black" onClick={() => console.log("awfwaf")}>Click me</button>
		<div className={`${inter.className} h-[100%] flex justify-end`}>
			<Link href="/" className={`${inter.className} py-3 mx-3`}>Word Dictionary</Link>
			<Link href="/" className="py-3 mx-3">Sentences</Link>
			<Link href="/translate" className="py-3 mx-3">Translator</Link>
			<Link href="/suggest-text" className="py-3 mx-3">Suggest text</Link>
		</div>
		</div>
		<div className="md:hidden ">
	<NavBurger/>
	</div>
</div> 
    )
  
} 
export default Navbar


{/* <div className={`${inter.className} flex justify-between w-[100%] h-[3.8rem] bg-[orange]`}>

<Link href="/"><Image src={mainIcon.src} alt="website Icon" width={50} height={25} className="ml-3 w-[2.5rem] h-[3.8rem]"></Image></Link>

<div className={`${inter.className} h-[100%] flex justify-end`}>
	<Link href="/" className={`${inter.className} py-3 mx-3`}>Word Dictionary</Link>
	<Link href="/" className="py-3 mx-3">Sentences</Link>
	<Link href="/translate" className="py-3 mx-3">Translator</Link>
	<Link href="/suggest-text" className="py-3 mx-3">Suggest text</Link>
</div>

</div> */}