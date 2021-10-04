const OtpBox = () => {
    return (
        <div className="w-full h-full flex justify-center pt-12">
            <div className="w-96 h-96 rounded bg-white flex flex-col overflow-hidden">
                <div className="w-full h-1 flex">
                    <div className="w-10 h-full" style={{ backgroundColor: '#2387EB'}}></div>
                    <div className="w-16 h-full" style={{ backgroundColor: '#074F96'}}></div>
                    <div className="flex-1" style={{ backgroundColor: '#8B3BF8'}}></div>
                    <div className="w-10 h-full" style={{ backgroundColor: '#F4AB57'}}></div>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center px-10">
                    <p className="text-md font-bold">Enter One Time Access Code</p>
                    <p className="text-center mt-4 text-sm font-normal text-gray-500">
                    Please enter the code given to you by the owner of the VAXX QR you just scanned
                    </p>

                    <div className="w-full flex justify-center mt-6">
                        <input className="w-8 h-8 border-2 border-gray-300 mx-3 text-center text-xs" maxLength={1} minLength={1}  />
                        <input className="w-8 h-8 border-2 border-gray-300 mx-3 text-center text-xs" maxLength={1} minLength={1} />
                        <input className="w-8 h-8 border-2 border-gray-300 mx-3 text-center text-xs" maxLength={1} minLength={1} />
                        <input className="w-8 h-8 border-2 border-gray-300 mx-3 text-center text-xs" maxLength={1} minLength={1} />
                    </div>

                    <button className="w-full h-10 rounded-md bg-main_blue text-white text-sm mt-6">Verify Code</button>
                </div>
            </div>
        </div>
    )
}

export default OtpBox;