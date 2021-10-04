import Image from 'next/image';
import Apple from '../../public/Images/btn-app-store-web.svg'
import Google from '../../public/Images/btn-google-play-web.svg'
import { FiMenu } from 'react-icons/fi'

const LeftComponent = () => {
    return (
        <div className="w-full h-full flex flex-col">
            {/* header */}

            <div className="w-full h-24 bg-white px-10 flex items-center md:justify-between sm:justify-between lg:justify-start xl:justify-start">
                <h1 className="text-black font-bold text-2xl">VA
                    <span className="text-main_blue ">XX</span>
                </h1>
                <div className="md:block lg:hidden">
                    <FiMenu color="black" size={30} />
                </div>
            </div>

            {/* body */}
            <div className="flex-1 flex flex-col justify-center px-10">
                <p className="text-gray-500 text-sm">Welcome to VAXX</p>
                <h1 className=" font-extrabold mt-3 sm:text-2xl lg:text-3xl xl:text-3xl md:text-2xl">Your Vaccination ID </h1>
                <h3 className=" font-medium xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl">All In One Place</h3>
                <p className="text-gray-500 text-sm lg:w-80 sm:w-full mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatio
                </p>

                <div className="w-full h-24 flex mt-8">
                        <div className="w-40 h-16 cursor-pointer">
                            <Image src={Apple} alt="appstore logog" className="w-full h-full" /> 
                        </div>
                        <div className="w-4"></div>
                        <div className="w-40 h-16 cursor-pointer">
                            <Image src={Google} alt="appstore logog" className="w-full h-full" />
                        </div>
                </div>
            </div>
        </div>
    )
}

export default LeftComponent;