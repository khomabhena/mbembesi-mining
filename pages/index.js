import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeroSection from '@/components/LandingPage/hero-section'
import Section from '@/components/LandingPage/section'
import getDataAbout from '@/data/data-about'
import getDataLogin from '@/data/data-login'
import SectionTwo from '@/components/LandingPage/section-two'
import getDataServices from '@/data/data-services'
import getDataSignUp from '@/data/data-sign-up'
import Layout from '@/components/LandingPage/layout'
import { StateContext } from '@/context/StateContext'
import SectionDouble from '@/components/LandingPage/section-double'
import getDataMission from '@/data/data-mission'
import getDataValues from '@/data/data-values'
import SectionSingle from '@/components/LandingPage/section-single'
import getDataWhatWeDo from '@/data/data-what-we-do'
import getDataBusinessOverview from '@/data/data-overview'
import getDataManagement from '@/data/data-management'
import SectionManagement from '@/components/LandingPage/section-management'
import getDataCSR from '@/data/data-csr'
import SectionMap from '@/components/LandingPage/section-map'
import getDataMines from '@/data/data-mines'
import SectionGallery from '@/components/LandingPage/section-gallery'
import getDataGallery from '@/data/data-gallery'
import Head from 'next/head'
import SectionSlideshow from '@/components/LandingPage/section-slideshow'
import SectionFooter from '@/components/LandingPage/section-footer'

export default function Home() {
  return (
    <div className=' relative min-w-full '>
      <Head>
        <title></title>
        <meta name='description' content='a' />
        <meta property='og:title' content='a' />
        <link rel='icon' href='/' />
      </Head>
      <StateContext>
        <Layout>
          <HeroSection />
          <Section data={getDataAbout()} />
          <SectionDouble data={getDataMission()} />
          <Section data={getDataValues()} />
          {/* <SectionSingle dot={false} data={getDataWhatWeDo()} /> */}
          {/* <SectionTwo id='overview' card={1} title='Business Overview' data={getDataBusinessOverview()} /> */}
          <SectionManagement id='team' card={2} title='Management Team' data={getDataManagement()} />
          <SectionSingle dot={true} data={getDataCSR()} />
          <SectionMap data={getDataMines()} />
          {/* <SectionGallery id='projects' card={2} title='Our Projects' data={getDataGallery()} /> */}
          <SectionSlideshow id='projects' title='Our Projects' data={getDataGallery()} />
        </Layout>
      </StateContext>
    </div>
  )
}
