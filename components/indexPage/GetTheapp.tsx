import { NextPage } from "next"
import Image from 'next/image'
import Apple from '../../public/Images/btn-app-store-web.svg'
import Google from '../../public/Images/btn-google-play-web.svg'

const GetTheApp: NextPage = () => {
    return (
        <div id="gettheapp" className="w-full h-72 flex flex-col items-center py-10 px-10 justify-center">
            <p className="text-2xl font-bold text-black">Download Our App</p>
            <p className="text-sm font-light text-gray-600 mt-3 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="w-full h-24 flex mt-8 justify-center">
                        <div className="w-40 h-16 cursor-pointer">
                            <Image src={Apple} alt="appstore logog" className="w-full h-full" /> 
                        </div>
                        <div className="w-4"></div>
                        <div className="w-40 h-16 cursor-pointer">
                            <Image src={Google} alt="appstore logog" className="w-full h-full" />
                        </div>
                </div>
        </div>
    )
}

export default GetTheApp;