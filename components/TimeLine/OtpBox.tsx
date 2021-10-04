import { PinInput, PinInputField, Spinner } from "@chakra-ui/react"
import React from 'react';

const OtpBox = ({ change }: {change: Function}) => {
    const [pin, setPin] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const submit = () => {
        if (pin.length < 4) {
            alert('Invalid pin');
            return;
        }
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
            change()
            clearTimeout(timer);
        }, 3000)
    }
    return (
        <div className="w-full h-full flex justify-center pt-12">
            <div className="w-96 h-96 rounded bg-white flex flex-col overflow-hidden">
                <div className="w-full h-1 flex">
                    <div className="w-10 h-full" style={{ backgroundColor: '#2387EB'}}></div>
                    <div className="w-24 h-full" style={{ backgroundColor: '#074F96'}}></div>
                    <div className="flex-1" style={{ backgroundColor: '#8B3BF8'}}></div>
                    <div className="w-10 h-full" style={{ backgroundColor: '#F4AB57'}}></div>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center px-10">
                    <p className="text-md font-bold">Enter One Time Access Code</p>
                    <p className="text-center mt-4 text-sm font-normal text-gray-500">
                    Please enter the code given to you by the owner of the VAXX QR you just scanned
                    </p>

                    <div className="w-full flex justify-center mt-6">
                        <PinInput type="number" value={pin} onChange={(e) => setPin(e)} mask otp onComplete={() => alert('done')}>
                            <PinInputField className="mx-2" />
                            <PinInputField className="mx-2" />
                            <PinInputField className="mx-2" />
                            <PinInputField className="mx-2" />
                        </PinInput>
                    </div>

                    <button disabled={loading} onClick={submit} className="w-full h-10 rounded-md bg-main_blue text-white text-sm mt-6">
                        {
                            loading ?
                            <Spinner size="md" color="white" />
                            :
                            <span>Verify Code</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default OtpBox;