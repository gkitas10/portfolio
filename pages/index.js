import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import HomeBanner from '../components/HomeBanner'
import Projects from '../components/Projects'


export default function Home() {
  return (
    <div>
      <Header/>
      <HomeBanner/>
      <Projects/>
    </div>
  )
}
