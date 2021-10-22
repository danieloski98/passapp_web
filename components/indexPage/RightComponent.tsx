import Image  from "next/image";
import PhoneImage from '../../public/Images/phone.png'

const RightComponent = () => {
    return (
        <div className="w-full h-full flex flex-col">

            {/* header */}
            <div className="w-full h-24 px-10 xl:flex lg:flex sm:hidden md:hidden items-center text-md font-medium justify-between">
                <p className="cursor-pointer">Home</p>
                <p className="cursor-pointer">
                    <a href="#about">About</a>
                </p>
                <p className="cursor-pointer">
                    <a href="#features">Features</a>
                </p>
                <p className="cursor-pointer">
                    <a href="#getintouch">Get In Touch</a>
                </p>

                <button className="w-40 h-12 text-white bg-black text-xs">
                    <a href="#gettheapp">Get The App</a>
                </button>
            </div>

            <div className="flex-1 flex overflow-hidden">
                <div className="w-full h-full overflow-hidden pt-16">
                    <Image src={PhoneImage} alt="phone" className="w-full h-full " />
                </div>
            </div>

        </div>
    )
}

export default RightComponent;