import { Html, Head, Main, NextScript } from "next/document";
import { Inter } from 'next/font/google'
import { Navbar } from './components/navbar'
import { Footer } from './components/footer'

export default function Document() {
  
  return (
    <Html lang="en">
      <Head />
      <body className="">
      <Navbar/>
        <Main />
        <Footer/>
        <NextScript />
      </body>
    </Html>
  );
}
