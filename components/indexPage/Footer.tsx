import { NextPage } from "next";
import Image from 'next/image'
import Apple from '../../public/Images/btn-app-store-web.svg'
import Logo from '../../public/Images/logo.svg'

const Footer: NextPage = () => {
    return (
        <div id="gettheapp" className="w-full h-72 flex flex-col items-center py-10 px-10 justify-center bg-gray-200 xl:px-0 lg:px-0 md:px-10 sm:px-10">
            <Image src={Logo} alt="appstore logog" className="w-full h-full" />
            <p className="text-md font-light text-black mt-4 xl:w-96 lg:w-96 md:w-full sm:w-full text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p className="text-sm font-Inter-Regular text-gray-600 mt-5 text-center">Copyright PASS | 2021</p>
        </div>
    )
}

export default Footer;