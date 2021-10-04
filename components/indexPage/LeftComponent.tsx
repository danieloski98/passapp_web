import Image from 'next/image';

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

                <div className="w-full h-24 flex">
                        <Image src="/images/btn-app-store-web.svg" alt="appstore logog"  width={150} height={50}  /> 
                        <div className="w-4"></div>
                        <Image src="/images/btn-google-play-web.svg" alt="appstore logog" width={150} height={50} className="ml-4" />
                </div>
            </div>
        </div>
    )
}

export default LeftComponent;