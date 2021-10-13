import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image/"
import {useRouter} from 'next/router'
import { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null);
const search = e =>{
    e.preventDefault();
    const term = searchInputRef.current.value;
    if(!term) return;
    router.push(`/search/?term=${term}`);
}
    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
            <Image src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" 
            width={120}
            height={40}
            onClick={()=>router.push("/")}
            className="cursor-pointer"
            />
            <form className="flex flex-grow border border-gray-200 rounded-full shadow-md max-w-3xl items-center px-6 py-3 ml-5 mr-2 sm:ml-3 sm:mr-2">
                <input type="text" ref={searchInputRef} className="flex-grow- w-full focus:outline-none" placeholder={router.query.term ? `${router.query.term}`  : ``} />
                <XIcon className="h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125 sm:mr-3"
                onClick={()=>searchInputRef.current.value=""}
                
                />
                <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2  pl-4 border-gray-300" />
                <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
                <button hidden type="submit" onClick={search}>Search</button>
            </form>

            <Avatar className="ml-auto" url="https://lh3.googleusercontent.com/ogw/ADea4I5_6qTnCZrXxXMJ8SCUQR0Gq8S1kHWz8QcZt-CRxg=s83-c-mo" />
            </div>
           


           {/* Header Options */}
           <HeaderOptions />
        </header>
    )
}

export default Header
