/* eslint-disable react/jsx-key */
"use client";

import React, { useState } from "react";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Footer = () => {
    return (
        <div className={`${inter.className}  w-[100%] h-full bg-[orange]`}>
			<p className={`${inter.className} p-3`}>All the information is referenced from &quot;Concise Dictionary of Minnesota Ojibwe&quot; by John D Nichols and Earl Nyholm. There might be some mistake in transfering the information. Correction is highly appreciated.</p>
        </div>
    )
  
} 

export default Footer