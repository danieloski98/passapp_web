import type { NextPage } from 'next'
import Head from 'next/head'
import { Image } from '@chakra-ui/react'
import { FiArrowRight, FiX, FiPlus } from 'react-icons/fi'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="w-full h-auto">
      <Head>
        <title>Pass APP</title>
        <meta name="description" content="Covid 19 vaccination and test result checking app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='w-full h-24 fixed xl:px-10 lg:px-10 md:px-5 sm:px-5 py-0 flex items-center'>

        <div style={{ border: '1px solid rgba(14, 131, 245, 0.1)'}} className="w-full bg-white  rounded-lg h-16 flex justify-between px-5">
          <div className="w-auto h-auto flex-1 flex justify-start items-center">
            <Image src="/assests/logo.svg" alt="logo" className='w-16 h-16 object-contain' />
          </div>
          <div className="flex-1 xl:flex lg:flex md:hidden sm:hidden justify-end items-center font-Sfm text-black text-md">
            <Link href='#features' passHref><p className='mr-8 cursor-pointer font-SF_NORMAL'>Features</p></Link>
            <Link href='#how' passHref><p className='mr-8 cursor-pointer'>How it works</p></Link>
            <Link href='#about' passHref><p className='mr-8 cursor-pointer'>About</p></Link>
            <button className='w-24 h-10 rounded-full text-white bg-primary_blue'>Get Pass</button>
          </div>
        </div>

      </div>

      <div className="w-full h-auto pt-24 flex justify-center">
        <div className='w-3/5 h-full mt-16 flex flex-col items-center'>
          <h1 className=' font-Sf_b text-center text-6xl'>Your vaccination ID all <br /> in  <span className='text-primary_blue'>one place.</span> </h1>
          <p className=' font-Sfm text-center text-md text-gray-500 mt-8'>A new, easy way to keep health record and manage <br /> your vaccination history </p>
          <div className="w-3/5  h-16 mt-16 flex justify-center">

            {/* google button */}
            <div className="w-40 h-full bg-black text-white rounded-full mr-5 flex p-4 items-center font-Sfm text-sm">
              <Image src="/assests/gpw.svg" alt="googleplay" className='w-8 h-8' />
              <div className="flex flex-col flex-1 items-center">
                <p className='text-xs font-Sfn'>Download on</p>
                <p className='text-lg font-Sfn'>Google Play</p>
              </div>
            </div>

              {/* apple button */}
            <div className="w-40 h-full bg-black text-white rounded-full mr-0 flex p-4 items-center font-Sfm text-sm">
              <Image src="/assests/aw.svg" alt="googleplay" className='w-8 h-8' />
              <div className="flex flex-col flex-1 items-center">
                <p className='text-xs font-Sfn'>Download on</p>
                <p className='text-lg font-Sfn'>Apple Store</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <div id='about' className="w-full flex justify-center">
        <div style={{ width: '716px', height: '674px'}} className="bg-gray-200 ml-10">
          <Image src="/assests/hero.png" alt="hero" className='w-full h-full' />
        </div>
      </div>

      <div  className="w-full flex justify-center">
        <div className="w-3/5 h-auto">
          <p className='font-Sfn text-gray-500 leading-8 text-md'>
          <span className='text-black'>What PASS is all about</span> - Have your current health status readily available so you can safely get back to living your best life and doing the things you love. PASS is a digital health app that you can use to show proof of COVID-19 status and medical test results to easily meet any state or country requirements. PASS’ uniquely designed to match the lives of its unique users. PASS is your PASSport to nightlife, travel and more!
          </p>
        </div>
      </div>

      <div id="features" className="w-full mt-20 bg-gray-100 flex justify-center py-20">

        <div className="w-4/5">
          <p className='font-Sfm text-gray-500'>What you can do on Pass app</p>
          <p className='text-4xl mt-6 font-Sfb'>What comes in the box <br /> with the Pass app</p>

          <div className="w-full h-96 bg-white rounded-xl mt-24 flex overflow-hidden">
            <div className="flex-1 flex flex-col p-10 justify-center">
              <p className='text-2xl font-Sfb text-black'>Upload of vaccine cards <br /> and test results</p>
              <p className='w-72 text-gray-500 font-Sfm text-sm mt-4'>Easily upload your vaccine card or test results to the app by taking a picture and pressing the upload button on the screen. </p>

              <button className="rounded-full w-40 bg-gray-100 h-12 mt-20 font-Sfm text-sm flex items-center justify-evenly px-5">
                <span>Get Started</span>
                <FiArrowRight color="gray" size={25} />
              </button>
            </div>
            <div className="w-2/4 flex items-end">
              <div className=" w-full flex items-end">
                <Image src="/assests/Feature1.png" alt="pic" style={{ width: '615px', height: '300px', marginLeft: '-200px'}}  className=' object-cover' />
              </div>
             
            </div>
          </div>

          <div className="w-full h-96 bg-white rounded-xl mt-24 flex flex-row-reverse overflow-hidden">
            <div className="flex-1 flex flex-col p-10 justify-center">
              <p className='text-2xl font-Sfb text-black'>Sharing & management <br /> of vaccine cards</p>
              <p className='w-72 text-gray-500 font-Sfm text-sm mt-4'>Easily upload your vaccine card or test results to the app by taking a picture and pressing the upload button on the screen. </p>

              <button className="rounded-full w-40 bg-gray-100 h-12 mt-20 font-Sfm text-sm flex items-center justify-evenly px-5">
                <span>Learn More</span>
                <FiArrowRight color="gray" size={25} />
              </button>
            </div>
            <div className="w-2/4 flex items-end">
              <div className=" w-full flex items-end ">
                <Image src="/assests/feature2.png" alt="pic" style={{ width: '615px', height: '300px', marginLeft: '130px'}}  className=' object-cover' />
              </div>
             
            </div>
          </div>

          <div className="w-full h-96 bg-white rounded-xl mt-24 flex overflow-hidden">
            <div className="flex-1 flex flex-col p-10 justify-center">
              <p className='text-2xl font-Sfb text-black'>Securely protect vaccine <br /> card & test results</p>
              <p className='w-72 text-gray-500 font-Sfm text-sm mt-4'> PASS is designed to keep your information safe with a two-way authentication process. This is to ensure your personal info are safely stored. You are allowed to choose how much and which information you would like to share with other users. </p>

              <button className="rounded-full w-40 bg-gray-100 h-12 mt-10 font-Sfm text-sm flex items-center justify-evenly px-5">
                <span>Learn More</span>
                <FiArrowRight color="gray" size={25} />
              </button>
            </div>
            <div className="w-2/4 flex items-center h-full">
              <div className=" w-full h-full flex items-center">
                <Image src="/assests/feature3.png" alt="pic" style={{ width: '100%', height: '250px', marginLeft: '0px'}}  className=' object-contain' />
              </div>
             
            </div>
          </div>

        </div>

      </div>


      <div id="how" className="w-full h-auto bg-white pt-16 flex flex-col pl-32 pb-10">
        <p className='text-md font-Sfn text-gray-500'>Upload, Get QR, Share</p>
        <h3 className='mt-10 font-Sf_b text-4xl text-black'>How does Pass work?</h3>
        <div className="flex overflow-auto mt-8">

          <div className="w-80 h-80 min-w-80  flex mr-40">
            <div className="h-full w-16  flex items-center justify-center">
              <p className='text-4xl text-primary_blue font-Sfb'>01</p>
            </div>

            <div className="flex-1 flex flex-col py-6 justify-center px-2">
              <div className="w-20 h-20">
                <Image src="/assests/step_1.png" alt="icon" className='w-full h-full' />
              </div>
              <h3 className='text-2xl font-Sfb mt-6 text-black'>Create your <br /> account</h3>
              <p className='font-Sfn text-md text-gray-500 mt-4'>You can create an account using your personal details such as name and email address</p>
            </div>
          </div>

          <div className="w-80 h-80 min-w-80   flex mr-40">
            <div className="h-full w-16  flex items-center justify-center">
              <p className='text-4xl text-primary_blue font-Sfb'>02</p>
            </div>

            <div className="flex-1 flex flex-col py-6 justify-center px-2">
              <div className="w-20 h-20">
                <Image src="/assests/step_2.png" alt="icon" className='w-full h-full' />
              </div>
              <h3 className='text-2xl font-Sfb mt-6 text-black'>Upload your cards <br /> & results</h3>
              <p className='font-Sfn text-md text-gray-500 mt-4'>Upload your vaccine card or test results to the app by taking a picture of it</p>
            </div>
          </div>

          <div className="w-80 h-80 min-w-80  flex mr-40">
            <div className="h-full w-16  flex items-center justify-center">
              <p className='text-4xl text-primary_blue font-Sfb'>03</p>
            </div>

            <div className="flex-1 flex flex-col py-6 justify-center px-2">
              <div className="w-20 h-20">
                <Image src="/assests/step_1.png" alt="icon" className='w-full h-full' />
              </div>
              <h3 className='text-2xl font-Sfb mt-6 text-black'>Generation of your <br /> QR code</h3>
              <p className='font-Sfn text-md text-gray-500 mt-4'>A QR code is generated to store your personal information</p>
            </div>
          </div>

          <div className="w-80 h-80 min-w-80   flex mr-40">
            <div className="h-full w-16  flex items-center justify-center">
              <p className='text-4xl text-primary_blue font-Sfb'>04</p>
            </div>

            <div className="flex-1 flex flex-col py-6 justify-center px-2">
              <div className="w-20 h-20">
                <Image src="/assests/step_2.png" alt="icon" className='w-full h-full' />
              </div>
              <h3 className='text-2xl font-Sfb mt-6 text-black'>Share the QR code </h3>
              <p className='font-Sfn text-md text-gray-500 mt-4'>Share the QR code to generate a one-time use passcode that allows your results to be shared with the person you choose</p>
            </div>
          </div>

        </div>
      </div>

      <div className="w-full flex flex-col items-center mt-40 pb-20">
        <p className='text-md font-Sfn text-gray-500'>FAQs</p>
        <h3 className='mt-10 font-Sf_b text-4xl text-black'>Got questions?</h3>

        <div style={{ border: '1px solid rgba(14, 131, 245, 0.1)'}} className="w-3/5 h-auto rounded-lg mt-10 flex flex-col p-2">
          <div className="w-full h-8 flex justify-between items-center">
            <h3 className='font-Sfb text-xl text-black'>What test results can I upload now?</h3>
            <FiX size={25} color="grey" />
          </div>
          <p className='pr-6 text-md text-gray-500 font-Sfn mt-4'>For now you can only upload your COVID-19 vaccination records and test results. We are working on allowing you upload other health records and tests</p>
        </div>

        <div style={{ border: '1px solid rgba(14, 131, 245, 0.1)'}} className="w-3/5 h-16 rounded-lg mt-10 flex flex-col p-2">
          <div className="w-full h-8 flex justify-between items-center">
            <h3 className='font-Sfb text-xl text-black'>How secure are my test results?</h3>
            <FiPlus size={25} color="grey" />
          </div>
         
        </div>

        <div style={{ border: '1px solid rgba(14, 131, 245, 0.1)'}} className="w-3/5 h-16 rounded-lg mt-10 flex flex-col p-2">
          <div className="w-full h-8 flex justify-between items-center">
            <h3 className='font-Sfb text-xl text-black'>How is submitted information verified?</h3>
            <FiPlus size={25} color="grey" />
          </div>
         
        </div>
      </div>

      <div className="w-full mt-0 h-auto pb-10 bg-gray-100 flex justify-center">
        <div className='w-3/5 h-full mt-16 flex flex-col items-center'>
            <h1 className=' font-Sf_b text-center text-6xl'>Download the <br /> app to get started</h1>
            <p className=' font-Sfm text-center text-md text-gray-500 mt-8'>A new, easy way to keep health record and manage <br /> your vaccination history </p>
            <div className="xl:w-3/5 lg:w-3/5 md:w-full sm:w-full  h-16 mt-16 flex justify-center">

              {/* google button */}
              <div className="w-40 h-full bg-transparent border-2 border-gray-200 text-black rounded-full mr-5 flex p-4 items-center font-Sfm text-sm">
                <Image src="/assests/gb.svg" alt="googleplay" className='w-8 h-8' />
                <div className="flex flex-col flex-1 items-center">
                  <p className='text-xs font-Sfn'>Download on</p>
                  <p className='text-lg font-Sfn'>Google Play</p>
                </div>
              </div>

                {/* apple button */}
              <div className="w-40 h-full bg-transparent border-2 border-gray-200 text-black rounded-full mr-0 flex p-4 items-center font-Sfm text-sm">
                <Image src="/assests/ab.svg" alt="googleplay" className='w-8 h-8' />
                <div className="flex flex-col flex-1 items-center">
                  <p className='text-xs font-Sfn'>Download on</p>
                  <p className='text-lg font-Sfn'>Apple Store</p>
                </div>
              </div>
              
            </div>
          </div>
      </div>

      {/* footer section */}

      <div className="w-full flex flex-col justify-center h-40 bg-gray-100 px-24">
        <div className="w-full flex justify-between">
          <div className="flex text-md font-Sfn  text-black ">
            <p className='mr-6'>Contact Us</p>
            <p className='mr-6'>FAQs</p>
            <p>Privacy</p>
          </div>

          <div className="flex">
            <FaFacebookF size={20} className="text-primary_blue mr-6" />
            <FaTwitter size={20} className="text-primary_blue mr-6" />
            <FaInstagram size={20} className="text-primary_blue" />
          </div>
        </div>

        <p className='mt-10 text-sm font-Sfn text-gray-400'>© 2022 Pass. All rights reserved</p>
      </div>


    </div>
  )
}

export default Home
