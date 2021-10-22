import { NextPage } from "next"
import { FaGoogle, FaTwitter, FaLinkedin } from 'react-icons/fa'

const Contacts: NextPage = () => {
    return (
        <div className="w-full h-full flex flex-col xl:justify-center lg:justify-center md:justify-start sm:justify-start xl:px-0 lg:px-0 md:px-10 sm:px-10 xl:py-0 lg:py-0 md:py-6 sm:py-6">
            <div className="flex flex-col w-full h-auto mb-10">
                <p className="text-md font-light text-gray-400">Phone</p>
                <p className="font-semibold text-xl text-black">+1 234 567 89 10</p>
            </div>

            <div className="flex flex-col w-full h-auto mb-10">
                <p className="text-md font-light text-gray-400">Email</p>
                <p className="font-semibold text-xl text-black">support@mypassapp.com</p>
            </div>

            <div className="flex w-full">
                <div className="w-10 h-10 rounded-full bg-gray-200 mr-4 flex justify-center items-center">
                    <FaGoogle size={20} color="grey" />
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-200 mr-4 flex justify-center items-center">
                    <FaTwitter  size={20} color="grey" />
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-200 mr-4 flex justify-center items-center">
                    <FaLinkedin  size={20} color="grey" />
                </div>
            </div>
        </div>
    )
}

export default Contacts;