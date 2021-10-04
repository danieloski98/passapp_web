import Image  from "next/image";
import PhoneImage from '../../public/Images/phone.png'

const RightComponent = () => {
    return (
        <div className="w-full h-full flex flex-col">

            {/* header */}
            <div className="w-full h-24 px-10 flex items-center text-md font-medium justify-between">
                <p>Home</p>
                <p>About</p>
                <p>Features</p>
                <p>Get In Touch</p>

                <button className="w-40 h-12 text-white bg-black text-xs">
                    Get The App
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