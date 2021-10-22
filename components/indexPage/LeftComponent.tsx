import Image from 'next/image';
import Apple from '../../public/Images/btn-app-store-web.svg'
import Google from '../../public/Images/btn-google-play-web.svg'
import { FiMenu, FiMail, FiX } from 'react-icons/fi'
import { InputGroup, InputLeftElement, Input, Spinner } from '@chakra-ui/react'
import Logo from '../../public/Images/logo.svg'
import * as yup from 'yup';
import { useFormik } from 'formik';
import React from 'react'
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

const validationSchema = yup.object({
    email: yup.string().email('Invalid Email Address'),
})

const LeftComponent = () => {
    const [loading, setLoading] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    // formik
    const formik = useFormik({
        initialValues: {email: ''},
        validationSchema,
        onSubmit: () => {},
    })

    // function
    const submit = async () => {
        if (!formik.isValid) {
            alert('Please filling the form properly')
        }
        if (!formik.dirty) {
            alert('Input an email address')
        }

        // submit
        setLoading(true);
        const request = await fetch(`${url}/emaillist`, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formik.values),
        });

        const json = await request.json();
        setLoading(false);
        if ( json.statusCode !== 200) {
            alert(json.errorMessage);
        }else {
            formik.resetForm();
            alert(json.successMessage);
        }
    }

    return (
        <div className="w-full h-full flex flex-col">
            {/* header */}

            <div className="w-full h-24 bg-white px-10 flex items-center md:justify-between sm:justify-between lg:justify-start xl:justify-start">
                <Image src={Logo} alt="appstore logog" className="w-full h-full" />
                <div className="md:block lg:hidden">
                    <FiMenu color="black" size={30} onClick={() => setOpen(true)} />
                </div>
            </div>

            {/* body */}
            <div className="flex-1 flex flex-col justify-center px-10">
                <p className="text-gray-500 text-sm">Welcome to PASS</p>
                <h1 className=" font-extrabold mt-3 sm:text-2xl lg:text-3xl xl:text-3xl md:text-2xl">Your Vaccination ID &</h1>
                <h3 className=" font-medium xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl">Test Results All In One Place</h3>
                <p className="text-gray-500 text-sm lg:w-80 sm:w-full mt-3">
                    Return to the world with PASS and enjoy life without restrictions.
                </p>

                <div className="xl:w-96 lg:w-96 md:w-full sm:w-full h-auto flex flex-col mt-8">
                      <InputGroup className="" background="#EFF2F6" >
                        <InputLeftElement>
                            <FiMail size={20} color="gray" />
                        </InputLeftElement>
                        <Input name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} fontSize="sm" />
                      </InputGroup>
                      { formik.touched.email && formik.errors.email && (
                          <p className="mt-2 text-xs text-red-500">{formik.errors.email}</p>
                      )}

                      <button disabled={loading} onClick={submit} className="w-40 h-12 rounded text-white mt-3 bg-light_blue text-sm">
                          {loading ? <Spinner size="sm" color="white" /> : <span>Join Waitlist</span>}
                      </button>
                </div>
            </div>

            {/* Drawer */}
            <Drawer isOpen={open} onClose={() => setOpen(false)} closeOnOverlayClick={true} closeOnEsc={true} size="xs">
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerBody>
                        <div className="w-full h-12 flex justify-end mt-4">
                            <FiX size={30} className="text-light_blue" onClick={() => setOpen(false)} />
                        </div>
                        <p className="cursor-pointer mb-6">Home</p>
                        <p className="cursor-pointer mb-6">
                            <a href="#about">About</a>
                        </p>
                        <p className="cursor-pointer mb-6">
                            <a href="#features">Features</a>
                        </p>
                        <p className="cursor-pointer mb-6">
                            <a href="#getintouch">Get In Touch</a>
                        </p>

                        <button className="w-40 h-12 text-white bg-black text-xs">
                            <a href="#gettheapp">Get The App</a>
                        </button>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </div>
    )
}

export default LeftComponent;