import React from 'react';
import NavLink from 'next/link'
import { FiX } from 'react-icons/fi'
import OtpBox from "../../components/TimeLine/OtpBox";
import UserTimeLine from '../../components/TimeLine/timeline';
import { FiMenu } from 'react-icons/fi';
import { useRouter } from 'next/router';
import { Modal, ModalOverlay, ModalContent, ModalBody, Spinner } from '@chakra-ui/react';
import { IUser } from '../../types/User';
import Logo from '../../public/Images/logo.svg'
import Image from 'next/image';
import url from '../../util/url';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from "@chakra-ui/react"

const TimeLine = () => {
    const otp = React.useRef('');
    const router = useRouter();
    const [verified, setVerified] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [user, setUser] = React.useState({} as IUser);
    const [id, setId] = React.useState(router.query['user_id']);
    const [open, setOpen] = React.useState(false);
    

    React.useEffect(() => {
        (async function (){
           try {
            if (router.query['user_id'] === null || router.query['user_id'] === undefined) { return }
            else {
                const request = await fetch(`${url}/otp/${router.query['user_id']}`);
                const json = await request.json();
                if (json.statusCode !== 200) {
                    alert(json.errorMessage);
                    console.log(json);
                    router.push('/');
                }else {
                    alert(json.successMessage);
                }
            }
            setLoading(false);
           } catch (error) {
               setLoading(false);
               console.log(error);
           }
        })()
    }, [router.query])

    const change = () => {
        setVerified(true);
    }

    const verify = async(code: number) => {
        try {
            const request = await fetch(`${url}/otp/verify/${code}`);
            const json = await request.json();
            console.log(json);
            setUser(json.data);
            setVerified(true);
        } catch (error) {
            alert('An Error Occured');
            console.log(error);
        }
    }
    return (
        <div className="w-full h-screen flex flex-col bg-light_grey overflow-auto xl:pt-5 lg:pt-5 md:pt-0 sm:pt-0 pb-24">

            {/* modal */}
            <Modal isOpen={loading} isCentered onClose={() => setLoading(false)} closeOnEsc={false} closeOnOverlayClick={false}>
                <ModalOverlay />
                <ModalContent>
                    <ModalBody>
                        <div className="w-full h-full flex flex-col items-center justify-center py-5">
                            <p>Requesting OTP Code</p>
                            <Spinner size="lg" color="blue" className="mt-4" />
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
           
           {/* header */}

           <div className="w-full xl:h-24 sm:h-1/4 flex items-center px-10 mb-20 xl:bg-transparent lg:bg-transparent mt-6">
               <div className="flex-1 flex items-center">
                    <Image src={Logo} alt="appstore logog" className="w-full h-full" />
               </div>

               <div className="flex-1 xl:flex lg:flex justify-between items-center sm:hidden md:hidden">
                    <p>Home</p>
                    <p>About</p>
                    <p>Features</p>
                    <p>Get In Touch</p>

                    <button className="w-40 h-12 text-white bg-black text-xs">
                        Get The App
                    </button>
               </div>

               <div className="xl:hidden lg:hidden md:block sm:block">
                   <FiMenu color="black" size={30} onClick={() => setOpen(true)} />
               </div>
           </div>

           {/* body */}
           <div className="flex-1">
               {
                   verified ?
                   <UserTimeLine user={user} />
                   :
                   <OtpBox change={verify} />
               }
           </div>

            {/* Drawer */}
            <Drawer isOpen={open} onClose={() => setOpen(false)} closeOnOverlayClick={true} closeOnEsc={true} size="xs">
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerBody>
                        <div className="w-full h-12 flex justify-end mt-4">
                            <FiX size={30} className="text-light_blue" onClick={() => setOpen(false)} />
                        </div>
                        <p className="cursor-pointer mb-6">
                            <NavLink href="/">Home</NavLink>
                        </p>
                        <p className="cursor-pointer mb-6">
                            <NavLink href="/#about">About</NavLink>
                        </p>
                        <p className="cursor-pointer mb-6">
                            <NavLink href="/#features">Features</NavLink>
                        </p>
                        <p className="cursor-pointer mb-6">
                            <NavLink href="/#getintouch">Get In Touch</NavLink>
                        </p>

                        <button className="w-40 h-12 text-white bg-black text-xs">
                            <NavLink href="/#gettheapp">Get The App</NavLink>
                        </button>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </div>
    )
}

export default TimeLine;