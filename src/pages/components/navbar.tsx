/* eslint-disable react/jsx-key */
"use client";

import React, { useState } from "react";
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Image from "next/image";
import mainIcon from "../../../public/mainIcon.png"
const inter = Inter({ subsets: ['latin'] })

export const Navbar = () => {
    return (
        <div className={`${inter.className} flex justify-between w-[100%] h-[3.8rem] bg-[orange]`}>
			{/* buttons */}
			<Link href="/"><Image src={mainIcon.src} alt="website Icon" width={50} height={25} className="ml-3 w-[2.5rem] h-[3.8rem]"></Image></Link>
			<div className={`${inter.className} h-[100%] flex justify-end`}>
            	<Link href="/" className={`${inter.className} py-3 mx-3`}>Word Dictionary</Link>
				<Link href="/" className="py-3 mx-3">Sentences</Link>
				<Link href="/translate" className="py-3 mx-3">Translator</Link>
				<Link href="/suggest-text" className="py-3 mx-3">Suggest text</Link>
			</div>
        </div>
    )
  
} 