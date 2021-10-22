import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import AboutCard from '../components/indexPage/AboutCard'
import Contact from '../components/indexPage/Contact'
import Features from '../components/indexPage/Features'
import Footer from '../components/indexPage/Footer'
import GetTheApp from '../components/indexPage/GetTheapp'
import LeftComponent from '../components/indexPage/LeftComponent'
import RightComponent from '../components/indexPage/RightComponent'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="w-full h-auto">
      <Head>
        <title>Pass APP</title>
        <meta name="description" content="Covid 19 vaccination and test result checking app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full h-screen">
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
      <Footer />

    </div>
  )
}

export default Home
