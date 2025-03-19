import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/latest_collection'
import Bestseller from '../components/Bestseller'
import Ourpolicy from '../components/Ourpolicy'
import Newsletterbox from '../components/Newsletterbox'
function Home() {
  return (
   <div>
    <Hero></Hero>
    <LatestCollection></LatestCollection>
    <Bestseller></Bestseller>
    <Ourpolicy></Ourpolicy>
    <Newsletterbox></Newsletterbox>
   </div>
  )
}

export default Home