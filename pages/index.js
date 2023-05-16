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

export default function Home() {
  return (
    <div className=' relative'>
      <StateContext>
        <Layout>
          <HeroSection />
          <Section data={getDataAbout()} />
          <Section data={getDataLogin()} />
          <SectionTwo title='Our Services' data={getDataServices()} />
          <Section data={getDataSignUp()} />
        </Layout>
      </StateContext>
    </div>
  )
}
