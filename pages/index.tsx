import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/indexPage/Footer'
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
        <div className="w-full h-full flex">
          <div className="w-3/6 h-full">
            <LeftComponent />
          </div>
          <div className="flex-1 bg-blue-300 right">
            <RightComponent />
          </div>
        </div>
      </div>

      <Footer />

    </div>
  )
}

export default Home
