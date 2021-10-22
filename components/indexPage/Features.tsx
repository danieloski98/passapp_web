import type { NextPage } from 'next'
import Image from 'next/image'
import { FaLock, FaAddressCard, FaEdit } from 'react-icons/fa'
import Vaccine from '../../public/Images/vaccine.png';

const Features: NextPage = () => {
    return (
        <div id="features" className="w-full xl:h-screen lg:h-screen md:h-auto sm:h-auto flex sm:flex-col md:flex-col lg:flex-row xl:flex-row">

            {/* left */}
            <div className="flex-1  xl:py-12 xl:px-20 lg:py-12 lg:px-20 md:p-10 sm:p-10">
                <div className="w-full h-full rounded-lg overflow-hidden">
                    <Image src={Vaccine} alt="vaccination" className="w-full h-full" />
                </div>
            </div>

            {/* right */}
            <div className="flex-1 bg-white xl:p-10 lg:p-20 md:p-10 sm:p-10">
                <div className="w-full h-full rounded-lg bg-white flex flex-col">
                    <p className="font-semibold text-md mt-3 text-gray-500">Features</p>
                    <h2 className=" font-bold text-3xl  mt-5">What You Can Do On Pass App</h2>
                    
                    <div className="w-full h-40 flex flex-col mt-8">
                        <FaAddressCard size={30} color="black" />
                        <p className="font-semibold text-md mt-3 text-gray-500">Upload Vaccine Cards</p>
                        <p className="font-light text-sm mt-3 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="w-full h-40 flex flex-col mt-8">
                        <FaEdit size={30} color="black" />
                        <p className="font-semibold text-md mt-3 text-gray-500">Share & Manage Vaccine Cards</p>
                        <p className="font-light text-sm mt-3 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="w-full h-40 flex flex-col mt-8">
                        <FaLock size={30} color="black" />
                        <p className="font-semibold text-md mt-3 text-gray-500">Securely Protect Vaccine Card Access</p>
                        <p className="font-light text-sm mt-3 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <button className="w-40 h-16 mt-4 rounded bg-light_blue text-white">Get The App</button>

                </div>  
            </div>
        </div>
    )
}

export default Features;