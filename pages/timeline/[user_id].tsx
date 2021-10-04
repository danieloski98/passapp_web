import React from 'react';
import OtpBox from "../../components/TimeLine/OtpBox";
import UserTimeLine from '../../components/TimeLine/timeline';
import { FiMenu } from 'react-icons/fi';

const TimeLine = () => {
    const [verified, setVerified] = React.useState(false);

    const change = () => {
        setVerified(true);
    }
    return (
        <div className="w-full h-screen flex flex-col bg-light_grey overflow-auto xl:pt-5 lg:pt-5 md:pt-0 sm:pt-0 pb-24">
           
           {/* header */}

           <div className="w-full xl:h-24 sm:h-1/4 flex items-center px-10 mb-20 xl:bg-transparent lg:bg-transparent mt-6">
               <div className="flex-1 flex items-center">
                    <h1 className="text-black font-bold text-2xl">VA
                        <span className="text-main_blue ">XX</span>
                    </h1>
               </div>

               <div className="flex-1 xl:flex lg:flex justify-between items-center sm:hidden md:hidden">
                    <p>Home</p>
                    <p>About</p>
                    <p>Features</p>
                    <p>Get In Touch</p>

                    <button className="w-40 h-12 text-white bg-black text-xs">
                        Get The App
                    </button>
               </div>

               <div className="xl:hidden lg:hidden md:block sm:block">
                   <FiMenu color="black" size={30} />
               </div>
           </div>

           {/* body */}
           <div className="flex-1">
               {
                   verified ?
                   <UserTimeLine />
                   :
                   <OtpBox change={change} />
               }
           </div>
        </div>
    )
}

export default TimeLine;