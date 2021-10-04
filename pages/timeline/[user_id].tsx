import React from 'react';
import OtpBox from "../../components/TimeLine/OtpBox";
import UserTimeLine from '../../components/TimeLine/timeline';

const TimeLine = () => {
    const [verified, setVerified] = React.useState(false);

    const change = () => {
        setVerified(true);
    }
    return (
        <div className="w-full h-screen flex flex-col bg-light_grey overflow-auto pt-5 pb-24">
           
           {/* header */}

           <div className="w-full h-24 flex px-10 mb-20">
               <div className="flex-1 flex items-center">
                <h1 className="text-black font-bold text-2xl">VA
                    <span className="text-main_blue ">XX</span>
                </h1>
               </div>

               <div className="flex-1 flex justify-between items-center">
                <p>Home</p>
                    <p>About</p>
                    <p>Features</p>
                    <p>Get In Touch</p>

                    <button className="w-40 h-12 text-white bg-black text-xs">
                        Get The App
                    </button>
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