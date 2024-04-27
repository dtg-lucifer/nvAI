import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
// import Hamburger from './components/Hamburger'

function App() {
  return (
    <>
      <Navbar />
      {/* <Hamburger /> */}

      {/* hero section */}
      <div className="w-full h-[1500px] bg-gray-900 flex-col justify-center">
          <div className="w-full h-[300px] flex justify-center items-center font-['Merriweather'] pt-52 px-2 md:px-0">
            <span className='text-5xl text-white text-center md:leading-relaxed font-semibold'>Revolutionizing Brain Tumour <br /> Detection</span>
          </div>

          <div className="w-full h-[50px] flex justify-center items-center font-['Poppins'] mt-12 md:mt-4 md:pt-6">
            <span className='text-white text-md text-center'>Cutting Edge AI Technologies for accurate Diagnosis!</span>
          </div>

          <div className="w-full h-[100px] flex justify-center items-center font-['Popping'] pt-10">
            <a href="#key_features" className="text-black text-xl font-semibold px-4 py-3 bg-white hover:bg-blue-600 hover:text-white duration-300 hover:duration-300 rounded-lg font-['Poppins']">Learn More</a>
          </div>

          <div id='key_features' className="w-full h-[30px] flex justify-center items-center text-center text-white font-['Poppins'] mt-52">FEATURES</div>

          <div className="w-full h-[30px] flex justify-center items-center text-center text-white text-4xl font-semibold font-['Jersey'] mt-4">Key Features</div>

          <div className="w-full h-[30px] flex justify-center items-center text-center text-white font-['Poppins'] mt-14">Discover the features that set us apart in brain tumour detection.</div>
      </div>

      <Footer />
      </>
  )
}

export default App