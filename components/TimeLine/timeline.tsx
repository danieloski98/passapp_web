import { FiChevronRight } from 'react-icons/fi'
import Image from 'next/image'
import { Divider } from "@chakra-ui/react"
import Avatar from '../../public/Images/avatar.png';
import Phizer from  '../../public/Images/phizer2.png'

const UserTimeLine = () => {
    return (
        <div className="w-full h-full flex justify-center">
            <div className="w-3/5 h-full flex flex-col">

                {/* header  */}

                <div className="w-full h-56 rounded bg-white flex flex-col overflow-hidden">
                    <div className="w-full h-1 flex">
                        <div className="w-24 h-full" style={{ backgroundColor: '#2387EB'}}></div>
                        <div className="w-64 h-full" style={{ backgroundColor: '#074F96'}}></div>
                        <div className="flex-1" style={{ backgroundColor: '#8B3BF8'}}></div>
                        <div className="w-24 h-full" style={{ backgroundColor: '#F4AB57'}}></div>
                    </div>

                    <div className="flex-1 flex flex-col items-center justify-center px-10">
                        <div className="w-20 h-20 rounded-full bg-blue-400 shadow overflow-hidden">
                            <Image src={Avatar} alt="avatar" className="w-full h-full object-cover" />
                        </div>
                        <p className="font-bold text-lg mt-4">Daniel Emmanuel</p>
                        <p className="font-medium text-xs mt-1 text-gray-400">Dani*******@gmail.com</p>
                    </div>
                </div>

                {/* body */}

                <div className="flex-1 flex mt-6">

                    {/* Vaccine card */}

                    <div className="w-64 h-full flex flex-col">
                        <h1 className="text-md font-bold">My Vaccine Card</h1>

                        <div className="w-full h-10 rounded-md mt-4 bg-dark_blue text-sm text-white flex justify-between items-center px-4 cursor-pointer">
                            <h2>View Vaccine Card</h2>
                            <FiChevronRight size={30} color="white" />
                        </div>

                        <div className="mt-6 w-full h-32 rounded-md bg-white flex flex-col px-8 justify-center">

                            <h1 className="text-md font-bold">1st Vaccine Shot</h1>
                            <p className="font-light text-sm mt-2 text-gray-400">Added June 5, 2021</p>
                            <p className="font-light text-sm mt-2 text-gray-400">Pfizer</p>

                        </div>

                        <div className="mt-6 w-full h-32 rounded-md bg-white flex flex-col px-8 justify-center">

                            <h1 className="text-md font-bold">2nd Vaccine Shot</h1>
                            <p className="font-light text-sm mt-2 text-gray-400">Added June 5, 2021</p>
                            <p className="font-light text-sm mt-2 text-gray-400">Pfizer</p>

                        </div>

                    </div>

                    {/* spacer */}

                    <div className="w-6 h-full"></div>

                    {/* timeline */}

                    <div className="flex-1 h-auto  flex flex-col">
                        <h1 className="text-md font-bold">My Timeline</h1>

                        <div className="mt-4 flex-1 bg-white rounded-md flex flex-col items-center py-6">

                            <div className="flex flex-col text-center">
                                <h1 className="text-md font-bold">2nd Vaccine Shot</h1>
                                <p className="font-light text-sm mt-2 text-gray-400">Added June 5, 2021</p>
                                <p className="font-light text-sm mt-2 text-gray-400">Pfizer</p>
                            </div>

                            <div className="h-24 mt-2">
                                <Divider orientation="vertical" variant="dashed" colorScheme="black" />
                            </div>

                            <div className="flex flex-col text-center">
                                <h1 className="text-md font-bold">2nd Vaccine Shot</h1>
                                <p className="font-light text-sm mt-2 text-gray-400">Added June 5, 2021</p>
                                <p className="font-light text-sm mt-2 text-gray-400">Pfizer</p>
                            </div>

                            <div className="h-24 mt-2">
                                <Divider orientation="vertical" variant="dashed" colorScheme="black" />
                            </div>

                            <div className="flex flex-col text-center">
                                <h1 className="text-md font-bold">2nd Vaccine Shot</h1>
                                <p className="font-light text-sm mt-2 text-gray-400">Added June 5, 2021</p>
                                <p className="font-light text-sm mt-2 text-gray-400">Pfizer</p>
                            </div>

                            <div className="h-24 mt-2">
                                <Divider orientation="vertical" variant="dashed" colorScheme="black" />
                            </div>

                            <div className="flex flex-col text-center">
                                <h1 className="text-md font-bold">2nd Vaccine Shot</h1>
                                <p className="font-light text-sm mt-2 text-gray-400">Added June 5, 2021</p>
                                <p className="font-light text-sm mt-2 text-gray-400">Pfizer</p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default UserTimeLine;