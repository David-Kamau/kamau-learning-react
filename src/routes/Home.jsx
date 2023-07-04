import React from 'react'
import '../styles/globals.css'
import '../styles/home.css'
import Header from '../components/Header'
import LandingPage from '../components/Landing'

const Home = () => {
  return (
    <div className="home"><Header/>
    <LandingPage/></div>
  )
}

export default Home