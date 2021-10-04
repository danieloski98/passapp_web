import OtpBox from "../components/TimeLine/OtpBox";

const TimeLine = () => {
    return (
        <div className="w-full h-screen flex flex-col bg-light_grey">
           
           {/* header */}

           <div className="w-full h-24 flex px-10">
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
               <OtpBox />
           </div>
        </div>
    )
}

export default TimeLine;