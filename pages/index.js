import Head from 'next/head';
import Avatar from '../components/Avatar';
import { ViewGridIcon, MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";
import { useRef } from 'react';
import Image from "next/image/"
import Footer from '../components/Footer';
import {useRouter} from 'next/router'
import  {googlemic} from '../public/googlemic.svg'
export default function Home() {
const router = useRouter();
 const searchInputRef = useRef(null);

  const search = e => {
    e.preventDefault();
     const term = searchInputRef.current.value;
   if(!term) return;
   router.push(`/search?term=${term}`);
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="flex justify-between items-center w-full p-5 text-sm text-gray-700" >
        {/* Left */}
        <div className="space-x-4 hidden items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        {/* Right */}
        <div className="flex space-x-4 items-center ml-auto">
          <p className="link">Gmail</p>
          <p className="link">Images</p>


          {/* Icon */}
          <ViewGridIcon className="text-gray-700 h-10 w-10 p-2 cursor-pointer hover:bg-gray-100 rounded-full" />

          {/* Aavtar */}
          <Avatar
            url="https://lh3.googleusercontent.com/ogw/ADea4I5_6qTnCZrXxXMJ8SCUQR0Gq8S1kHWz8QcZt-CRxg=s83-c-mo" />
        </div>
      </header>



      {/* Body */}

      <form className="flex flex-col mt-14  items-center md:mt-36 flex-grow w-4/5">

        <img
          src="google.svg"
        />

        <div className="flex w-full mt-5 hover:shadow-md focus-within:shadow-md max-w-md rounded-full border border-gray-200 px-5 py-3 sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input type="text" className="focus:outline-none flex-grow" ref={searchInputRef} placeholder="Search Google or type a URL" />
          <img src="googlemic.svg"
          className="h-5 cursor-pointer"
          />
        </div>

        <div className="flex mb-5 flex-col w-1/2  space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="btn">Google Search</button>
          <button onClick={search} className="btn">Feeling Luckey</button>
        </div>
      </form>


      {/* Footer */}
      <Footer />
    </div>
  )
}
