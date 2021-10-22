import { NextPage } from "next"
import NavLink from 'next/link'
import { FiMenu } from 'react-icons/fi';
import ContactForm from "../components/contactus/form";
import Logo from '../public/Images/logo.svg'
import Image from 'next/image';
import Contacts from "../components/contactus/contacts";
import { FiX } from 'react-icons/fi'
import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from "@chakra-ui/react"
import Footer from "../components/indexPage/Footer";

const ContactPage: NextPage = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <div className="w-full h-screen overflow-auto flex flex-col">
            {/* header */}

           <div className="w-full xl:h-24 lg:h-24 md:h-24 sm:h-24 flex items-center px-10 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0 xl:bg-transparent lg:bg-transparent sm:mt-0 xl:mt-0 lg:mt-0 md:mt-0">
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

           <div className="flex-1 flex xl:flex-row lg:flex-row md:flex-col sm:flex-col">

               <div className="xl:flex-1 lg:flex-1 md:flex-none sm:flex-none md:w-full sm:w-full md:h-full sm:h-full flex items-center px-10">
                    <ContactForm />
               </div>

               <div className="flex-1 h-full flex justify-center items-center">
                   <Contacts />
               </div>

           </div>

           {/* <Footer /> */}

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

export default ContactPage;