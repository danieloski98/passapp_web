import { FiChevronRight } from 'react-icons/fi'
import Image from 'next/image'
import { Divider } from "@chakra-ui/react"
import Avatar from '../../public/Images/avatar.png';
import Phizer from  '../../public/Images/phizer2.png'
import { IUser } from '../../types/User';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-bottts-sprites';

const UserTimeLine = ({ user }: {user: IUser}) => {


      let svg = createAvatar(style, {
        seed: user.email,
        colorful: true,
        background: '#2387EB',
      });

      const myLoader = () => {
        return `https://avatars.dicebear.com/api/bottts/${user.email}.svg`
      }

      const vacineLoader = (image: string) => {
          return image;
      }

    return (
        <div className="w-full h-full flex justify-center">
            <div className="xl:w-3/5 lg:w-3/5 md:w-full sm:w-full h-full flex flex-col xl:px-0 lg:px-0 md:px-5 sm:px-5">

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
                            <Image src={Avatar} loader={myLoader} alt="avatar" className="w-full h-full object-cover" />
                        </div>
                        <p className="font-bold text-lg mt-4">{user.first_name} {user.last_name}</p>
                        <p className="font-medium text-xs mt-1 text-gray-400">{`${user.email.slice(0,2)}*****@${user.email.split('@')[1]}`}</p>
                    </div>
                </div>

                {/* body */}

                <div className="flex-1 flex mt-6 xl:flex-row lg:flex-row md:flex-col sm:flex-col">

                    {/* Vaccine card */}

                    <div className="xl:w-64 lg:w-64 md:w-full sm:w-full h-full flex flex-col">
                        <h1 className="text-md font-bold">My Vaccine Card</h1>

                        <div className="w-full h-10 rounded-md mt-4 bg-dark_blue text-sm text-white flex justify-between items-center px-4 cursor-pointer">
                            <h2>View Vaccine Card</h2>
                            {/* <FiChevronRight size={30} color="white" /> */}
                        </div>

                        {
                            user.vacinations.length > 0 && user.vacinations.map((item, index) => (
                                <div key={index.toString()} className="mt-6 w-full h-32 rounded-md bg-white flex flex-col overflow-hidden justify-center">
                                    <Image src={vacineLoader(item.image_link)} alt="vacine card" width={400} height={250} className="w-full h-full object-cover" />
                                </div>
                            ))
                        }

                        {/* <div className="mt-2 w-full h-32 rounded-md bg-white flex flex-col px-8 justify-center">

                            <h1 className="text-md font-bold">2nd Vaccine Shot</h1>
                            <p className="font-light text-sm mt-2 text-gray-400">Added June 5, 2021</p>
                            <p className="font-light text-sm mt-2 text-gray-400">Pfizer</p>

                        </div> */}

                    </div>

                    {/* spacer */}

                    <div className="xl:w-6 lg:w-6 md:w-0 sm:w-0 xl:h-0 lg:h-0 md:h-6 sm:h-6 h-full"></div>

                    {/* timeline */}

                    <div className="flex-1 h-auto  flex flex-col">
                        <h1 className="text-md font-bold">My Timeline</h1>

                        {
                            user.tests.length < 1 && (
                                <div className="w-full h-24 flex justify-center items-center">
                                    <p className="text-md font-medium">User has not uploaded any test results</p>
                                </div>
                            )
                        }

                       {
                           user.tests.length > 0 && (
                                <div className="mt-4 flex-1 bg-white rounded-md flex flex-col items-center py-6 xl:px-0 lg:px-0 md:px-5 sm:px-5">

                                    {
                                        user.tests.map((item, index) => (
                                            <>
                                                <div key={index.toString()} className="flex rounded-md overflow-hidden">
                                                    <Image src={vacineLoader(item.link)} alt="vacine card" width={400} height={150} className="w-full h-full object-cover" />
                                                        {/* <h1 className="text-md font-bold">2nd Vaccine Shot</h1>
                                                        <p className="font-light text-sm mt-2 text-gray-400">Added June 5, 2021</p>
                                                        <p className="font-light text-sm mt-2 text-gray-400">Pfizer</p> */}
                                                    </div>

                                                {
                                                    index !== user.tests.length - 1 && (
                                                        <div className="h-24 mt-2">
                                                            <Divider orientation="vertical" variant="dashed" colorScheme="black" />
                                                        </div>
                                                    )
                                                }
                                            </>
                                        ))
                                    }


                                </div>
                           )
                       }

                    </div>

                </div>

            </div>
        </div>
    )
}

export default UserTimeLine;