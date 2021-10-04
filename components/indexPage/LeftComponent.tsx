import Image from 'next/image';
import Apple from '../../public/Images/btn-app-store-web.svg'
import Google from '../../public/images/btn-google-play-web.svg'

const LeftComponent = () => {
    return (
        <div className="w-full h-full flex flex-col">
            {/* header */}

            <div className="w-full h-24 bg-white px-10 flex items-center">
                <h1 className="text-black font-bold text-2xl">VA
                    <span className="text-main_blue ">XX</span>
                </h1>
            </div>

            {/* body */}
            <div className="flex-1 flex flex-col justify-center px-10">
                <p className="text-gray-500 text-sm">Welcome to VAXX</p>
                <h1 className=" font-extrabold text-3xl mt-3">Your Vaccination ID </h1>
                <h3 className=" font-medium text-3xl">All In One Place</h3>
                <p className="text-gray-500 text-sm w-80 mt-3">
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