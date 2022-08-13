import type { NextPage } from 'next'
import Footer from './components/Footer'
import NewsLetter from "./components/NewsLetter"
import HeroSection from "./components/HeroSection"
import StoreHeader from "./components/StoreHeader"
import HomeProducts from "./components/HomeProducts"
import HomeIconsSection from "./components/HomeIconsSection"

const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen max-w-screen">
      <div className="bg-grad flex flex-col h-full w-full flex-1">
        <StoreHeader />
        <HeroSection />
        <HomeIconsSection />
        <HomeProducts />
      </div>
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default Home
