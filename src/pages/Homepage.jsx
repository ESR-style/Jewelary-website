import React from 'react'
import Navbar from '../components/Navbar'
import Video from '../components/Video'
import Collection from '../components/Collection'
import Poster from '../components/Poster'


const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Video />
      <Collection />
      <Poster/>
    </div>
  )
}

export default Homepage
