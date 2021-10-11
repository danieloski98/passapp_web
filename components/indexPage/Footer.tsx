

const Footer = () => {
    return (
        <div className="w-full xl:h-64 lg:h-64 md:h-auto sm:h-auto bg-black flex xl:flex-row lg:flex-row md:flex-col sm:flex-col xl:py-0 lg:py-0 md:py-10 sm:py-10">
            <div className="flex-1 flex items-center justify-center sm:mt-6">
                <h2 className="font-extrabold text-white text-xl">What PASS Is All About</h2>
            </div>
            <div className="flex-1 flex items-center sm:mt-5">
                <p className=" text-justify text-gray-200 font-regular text-sm mx-10 ">
                PASS is an app that was created to give you access to your medical information whenever you need it. As Coronavirus cases continue to rise, it’s imperative to keep up with the status of your health. PASS is an all inclusive program that allows you to store your Vaccination ID and keep record of your updated test results. With vaccine mandates going into effect, PASS will allow you to return to normal from simply picking up your phone.

                </p>
            </div>
        </div>  
    )
}

export default Footer;