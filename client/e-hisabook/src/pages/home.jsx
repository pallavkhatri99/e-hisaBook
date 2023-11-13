import React from 'react'
import Navbar from '../components/mainComponent/navbar'
import Branding from '../components/mainComponent/branding'
import Features from '../components/mainComponent/features'
import Pricing from '../components/mainComponent/pricing'
import Review from '../components/mainComponent/review'
import About from '../components/mainComponent/about'
import Contact from '../components/mainComponent/contact'
import Footer from '../components/mainComponent/footer'
//import '../style/home.css'

function Home() {
  return (
    <div>
        <div className='section-box'>  
          <Navbar />
          <Branding />
        </div>
        <div className='section-box'>
          <Features />
        </div>
        <div className='section-box'>
          <Pricing />
        </div>
        <div className='section-box'>
          <Review />
        </div>
        {/* 
        <AppLook />
        */}
        <div className='section-box'>
          <About />
        </div>
        <div className='section-box'>
          <Contact />
        </div>
        <div className='section-box'>
          <Footer />
        </div>
        <div className='section-box' style={{textAlign:'center',height:'50px',background:'linear-gradient(to right, rgb(52, 232, 158), rgb(15, 52, 67))'}}>
          <p style={{margin:0,padding:'10px'}}class="footer-company-name"> © 2021 <a style={{textDecoration:'none'}} href="/" target="_blank">HisaBook</a>, All Rights Reserved. </p>
        </div>
    </div>
  )
}

export default Home