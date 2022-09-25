import React from 'react'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import Psychiatrist from '../Psychiatrist/Psychiatrist'

function Home() {
  return (
    <div>
        <Navbar />
        <Header />
        <Psychiatrist />
    </div>
  )
}

export default Home