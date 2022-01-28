import type { NextPage } from 'next'
import Head from 'next/head'
import { Image } from '@chakra-ui/react'
import { FiArrowRight} from 'react-icons/fi'

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
            <p className='mr-8 cursor-pointer font-SF_NORMAL'>Features</p>
            <p className='mr-8 cursor-pointer'>How it works</p>
            <p className='mr-8 cursor-pointer'>About</p>
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
                <p>Download on</p>
                <p>Google Play</p>
              </div>
            </div>

              {/* apple button */}
            <div className="w-40 h-full bg-black text-white rounded-full mr-0 flex p-4 items-center font-Sfm text-sm">
              <Image src="/assests/aw.svg" alt="googleplay" className='w-8 h-8' />
              <div className="flex flex-col flex-1 items-center">
                <p>Download on</p>
                <p>Apple Store</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div style={{ width: '716px', height: '674px'}} className="bg-gray-200 ml-10">
          <Image src="/assests/hero.png" alt="hero" className='w-full h-full' />
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-3/5 h-auto">
          <p className='font-Sfn text-gray-500 leading-8'>
          <span className='text-black'>What PASS is all about</span> - Have your current health status readily available so you can safely get back to living your best life and doing the things you love. PASS is a digital health app that you can use to show proof of COVID-19 status and medical test results to easily meet any state or country requirements. PASS’ uniquely designed to match the lives of its unique users. PASS is your PASSport to nightlife, travel and more!
          </p>
        </div>
      </div>

      <div className="w-full mt-20 bg-gray-100 flex justify-center py-20">

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
                <Image src="/assests/Feature 1.png" alt="pic" style={{ width: '615px', height: '300px', marginLeft: '-200px'}}  className=' object-cover' />
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
                <Image src="/assests/Feature 2.png" alt="pic" style={{ width: '615px', height: '300px', marginLeft: '130px'}}  className=' object-cover' />
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
                <Image src="/assests/Feature 3 image.png" alt="pic" style={{ width: '100%', height: '250px', marginLeft: '0px'}}  className=' object-contain' />
              </div>
             
            </div>
          </div>

        </div>

      </div>

      

  

      {/* <div className="w-full h-screen">
        <div className="w-full h-full flex lg:flex-row md:flex-col sm:flex-col">
          <div className="lg:w-3/6 md:w-full h-full">
            <LeftComponent />
          </div>
          <div className="flex-1 xl:bg-blue-300 lg:bg-blue-300 md:bg-white sm:bg-white right">
            <RightComponent />
          </div>
        </div>
      </div>

      <AboutCard />
      <Features />
      <Contact />
      <GetTheApp />
      <Footer /> */}

    </div>
  )
}

export default Home
