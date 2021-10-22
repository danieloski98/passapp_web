import { NextPage } from "next";

const Contact: NextPage = () => {
    return (
        <div id="getintouch" style={{ backgroundColor:'#B2D9FF'}} className="w-full xl:h-64 lg:h-64 md:h-auto sm:h-auto right xl:px-20 lg:px-20 md:px-10 sm:px-10 xl:py-0 lg:py-0 md:py-10 sm:py-10 flex xl:flex-row lg:flex-row md:flex-col sm:flex-col items-center">

            <div className="flex-1">
                <p className="text-2xl font-bold text-black">Get In Touch</p>
                <p className="font-light text-sm mt-3 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className="flex-1 flex flex-row xl:justify-end lg:justify-end md:justify-center sm:justify-center sm:items-start md:items-start xl:items-center lg:items-center sm:mt-6 md:mt-6 lg:mt-0 xl:mt-0 ">
                <button className="w-40 h-12 rounded text-white bg-light_blue text-sm">Contact Us</button>
                <button className="w-40 h-12 rounded text-black border-2 border-black xl:ml-6 lg:ml-6 md:ml-2 sm:ml-2 text-sm">Give us a call</button>
            </div>

        </div>
    )
}
export default Contact;